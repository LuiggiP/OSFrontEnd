import { Component } from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatCard, MatCardContent} from "@angular/material/card";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {LoginToolbarComponent} from "./login-toolbar.component/login-toolbar.component.component";
import {LoginContentComponentComponent} from "./login-content.component/login-content.component.component";
import {LoginFooterComponentComponent} from "./login-footer.component/login-footer.component.component";

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
    LoginFooterComponentComponent,
    LoginToolbarComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
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
