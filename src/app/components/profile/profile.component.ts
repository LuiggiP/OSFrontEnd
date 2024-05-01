import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {MatFormField} from "@angular/material/form-field";
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {MatList, MatListItem} from "@angular/material/list";
import {MatButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";
import {MatToolbar} from "@angular/material/toolbar";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatTabGroup,
    MatTab,
    MatList,
    MatListItem,
    MatButton,
    MatInput,
    MatToolbar
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  onLogin() {
    // Handle profile logic here
  }

  onRegister() {
    // Handle registration logic here
  }
}
