import { Component } from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatCard, MatCardContent} from "@angular/material/card";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {LoginToolbarComponent} from "./the-login-toolbar.component/the-login-toolbar.component";
import {LoginContentComponentComponent} from "./the-login-content.component/the-login-content.component";
import {TheLoginFooterComponent} from "./the-login-footer.component/the-login-footer.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatToolbar,
    MatCard,
    MatCardContent,
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatButton,
    MatIconButton,
    MatIcon,
    LoginContentComponentComponent,
    TheLoginFooterComponent,
    LoginToolbarComponent
  ],
  templateUrl: './login-section.component.html',
  styleUrl: './login-section.component.css'
})
export class LoginSectionComponent {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  onLogin() {
    // Handle login logic here
  }

  onRegister() {
    // Handle registration logic here
  }
}
