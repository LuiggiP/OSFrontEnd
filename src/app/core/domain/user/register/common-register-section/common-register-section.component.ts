import { Component } from '@angular/core';
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatFormFieldModule, MatHint} from '@angular/material/form-field';
import {MatInput} from "@angular/material/input";
import {Router} from "@angular/router";
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";
import {MatOption, provideNativeDateAdapter} from "@angular/material/core";
import {MatSelect} from "@angular/material/select";
import {MatButtonToggle, MatButtonToggleChange, MatButtonToggleGroup} from "@angular/material/button-toggle";
import {NgIf, NgOptimizedImage, DatePipe} from "@angular/common";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatToolbar} from "@angular/material/toolbar";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { ApiService} from "../../../../services/api-service";

@Component({
  selector: 'app-common-register-section',
  standalone: true,
  imports: [
    MatIconButton,
    MatIcon,
    MatCard,
    MatCardContent,
    MatFormFieldModule,
    MatInput,
    MatButton,
    MatDatepicker,
    MatDatepickerToggle,
    MatDatepickerInput,
    MatHint,
    MatOption,
    MatSelect,
    MatButtonToggleGroup,
    MatButtonToggle,
    NgIf,
    MatToolbar,
    NgOptimizedImage,
    ReactiveFormsModule
  ],
  providers: [provideNativeDateAdapter(), DatePipe],
  templateUrl: './common-register-section.component.html',
  styleUrl: './common-register-section.component.css'
})
export class CommonRegisterSectionComponent {
  hide = true;
  isTaxiDriver = false;
  registerForm: FormGroup;

  constructor(private router: Router, private _snackBar: MatSnackBar, private fb: FormBuilder, private apiService: ApiService, private datePipe: DatePipe) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      dni: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      date: ['', Validators.required],
      cellphone: ['', Validators.required],
      affiliatedCompany: ['']
    });
  }

  onRegisterClick() {
    if (this.registerForm.valid) {
      const formData = this.registerForm.value;
      const formattedDate = this.datePipe.transform(formData.date, 'yyyy-MM-dd');

      const profileData = {
        fullName: formData.name,
        dni: formData.dni,
        email: formData.email,
        birthDate: formattedDate,
        phone: formData.cellphone,
        affiliatedCompany: this.isTaxiDriver ? formData.affiliatedCompany : ''
      };

      const role = this.isTaxiDriver ? 'ROLE_TAXI' : 'ROLE_USER';

      this.apiService.createProfile(profileData).subscribe({
        next: (response) => {
          this.apiService.signUp(formData.email, formData.password, [role]).subscribe({
            next: (signUpResponse) => {
              this.openSnackBar('Registro Con Exito', 'Bienvenido a la aplicación');
              this.onIconClick();
            },
            error: (signUpError) => {
              this.openSnackBar('Error', 'Error al registrar el usuario');
              console.error('Error creating user:', signUpError);
            }
          });
        },
        error: (error) => {
          this.openSnackBar('Error', 'Error al registrar el perfil');
          console.error('Error creating profile:', error);
        }
      });
    } else {
      this.openSnackBar('Error', 'Por favor, complete todos los campos');
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  onIconClick() {
    this.router.navigate(['/start']);
  }

  onUserTypeChange(event: MatButtonToggleChange) {
    this.isTaxiDriver = event.value === 'taxiDriver';
    if (this.isTaxiDriver) {
      this.registerForm.controls['affiliatedCompany'].setValidators([Validators.required]);
    } else {
      this.registerForm.controls['affiliatedCompany'].clearValidators();
    }
    this.registerForm.controls['affiliatedCompany'].updateValueAndValidity();
  }
}
