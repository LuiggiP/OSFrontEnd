import { Component } from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {Router} from "@angular/router";
import {MatError, MatFormField} from "@angular/material/form-field";
import {NgOptimizedImage} from "@angular/common";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatButtonToggle, MatButtonToggleGroup} from "@angular/material/button-toggle";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../../../services/api-service';

@Component({
  selector: 'app-vehicle-add',
  standalone: true,
  imports: [
    MatToolbar,
    MatIcon,
    MatFormField,
    NgOptimizedImage,
    MatInput,
    MatButton,
    MatError,
    MatCardContent,
    MatCard,
    MatButtonToggleGroup,
    MatButtonToggle,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './vehicle-add.component.html',
  styleUrl: './vehicle-add.component.css'
})
export class VehicleAddComponent {
  vehicleForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private apiService: ApiService
  ) {
    this.vehicleForm = this.fb.group({
      name: ['', Validators.required],
      licensePlate: ['', Validators.required],
      brand: ['', Validators.required],
      model: ['', Validators.required],
      color: ['', Validators.required],
      year: ['', [Validators.required, Validators.min(1886)]]
    });
  }

  onIconCLick() {
    this.router.navigate(['/main-screen']);
  }

  onAddVehicleClick() {
    if (this.vehicleForm.valid) {
      this.apiService.createVehicle(this.vehicleForm.value).subscribe({
        next: (response) => {
          console.log('Vehicle created successfully:', response);
          this.router.navigate(['/vehicle-information']); // O redirigir a la lista de vehículos
        },
        error: (error) => {
          console.error('Error creating vehicle:', error);
        }
      });
    } else {
      console.log('Form is invalid');
    }
  }

  ReturnHome() {
    this.router.navigate(['/start']);
  }

  SeeProfile() {
    this.router.navigate(['/profile']);
  }
}
