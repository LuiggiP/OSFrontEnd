import { Component } from '@angular/core';
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInput} from "@angular/material/input";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    MatIconButton,
    MatIcon,
    MatCard,
    MatCardContent,
    MatFormFieldModule,
    MatInput,
    MatButton
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  hide = true
  constructor(private router: Router) {
  }
  onIconClick() {
    this.router.navigate(['/login'])
  }
}
