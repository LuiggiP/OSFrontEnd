import { Component } from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {Router} from "@angular/router";
import {MatFormField} from "@angular/material/form-field";
import {NgOptimizedImage} from "@angular/common";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatButtonToggle, MatButtonToggleGroup} from "@angular/material/button-toggle";
import {FormsModule} from "@angular/forms";


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
    MatCardContent,
    MatCard,
    MatButtonToggleGroup,
    MatButtonToggle,
    FormsModule
  ],
  templateUrl: './vehicle-add.component.html',
  styleUrl: './vehicle-add.component.css'
})
export class VehicleAddComponent {

  constructor(private router: Router) { }
  onIconCLick() {
    this.router.navigate(['/main-screen']);
  }

  onAddVehicleClick() {
    this.router.navigate(['/vehicle-information']);
  }


  ReturnHome() {
    this.router.navigate(['/start']);
  }
  SeeProfile() {
    this.router.navigate(['/profile']);
  }
}
