import { Component } from '@angular/core';
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInput} from "@angular/material/input";
import {Router} from "@angular/router";

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
    MatButton
  ],
  templateUrl: './common-register-section.component.html',
  styleUrl: './common-register-section.component.css'
})
export class CommonRegisterSectionComponent {
  hide = true
  constructor(private router: Router) {
  }
  onIconClick() {
    this.router.navigate(['/login'])
  }
}
