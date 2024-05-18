import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton, MatFabButton} from "@angular/material/button";
import {Router} from "@angular/router";

@Component({
  selector: 'login-content',
  standalone: true,
  imports: [
    NgOptimizedImage,
    MatFormField,
    MatInput,
    MatFabButton,
    MatButton
  ],
  templateUrl: './login-content.component.component.html',
  styleUrl: './login-content.component.component.css'
})
export class LoginContentComponentComponent {
  constructor(private router: Router) { }

  onLoginClick() {
    this.router.navigate(['/main-screen']);
  }

  onRegisterClick() {
    this.router.navigate(['/register']);
  }
}
