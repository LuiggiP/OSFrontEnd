import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton, MatFabButton} from "@angular/material/button";
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from "@angular/router";
import {ApiService} from "../../../../../services/api-service";
import {UserService} from "../../../../../services/user.service";

@Component({
  selector: 'login-content',
  standalone: true,
  imports: [
    NgOptimizedImage,
    MatFormField,
    MatInput,
    MatFabButton,
    MatButton,

  ],
  templateUrl: './the-login-content.component.html',
  styleUrl: './the-login-content.component.css'
})
export class LoginContentComponentComponent {


  // constructor(private router: Router) ,
  constructor(private _snackBar: MatSnackBar, private router: Router, private apiService: ApiService, private userService: UserService ) { }


  onLoginClick(user: string, password: string) {
    if (!user || !password) {
      this.openSnackBar('Error', 'Por favor, complete todos los campos');
    } else {
      this.apiService.signIn(user, password).subscribe({
        next: (response) => {
          console.log('SignIn Response:', response);  // Verificar la respuesta de signIn
          this.openSnackBar('Logeado Con Exito', 'Bienvenido a la aplicación');
          localStorage.setItem('token', response.token);
          this.userService.setUserId(response.id);  // Almacena el ID del usuario
          this.router.navigate(['/start']);
        },
        error: (error) => {
          this.openSnackBar('Error', 'Credenciales incorrectas');
        }
      });
    }
  }

  onRegisterClick() {
    this.router.navigate(['/common-register']);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  login() {
    this.router.navigate(['/login']);
  }
}
