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
import {NgIf} from "@angular/common";
import {MatSnackBar} from "@angular/material/snack-bar";

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

    NgIf
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './common-register-section.component.html',
  styleUrl: './common-register-section.component.css'
})
export class CommonRegisterSectionComponent {
  hide = true
  constructor(private router: Router, private _snackBar: MatSnackBar) {
  }
  onIconClick() {
    this.router.navigate(['/login'])
  }

  isTaxiDriver = false;

  onUserTypeChange(event: MatButtonToggleChange) {
    this.isTaxiDriver = event.value === 'taxiDriver';
  }


  openSnackBar() {
    this._snackBar.open('Registrado con éxito');
  }


}

