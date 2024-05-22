import { Component } from '@angular/core';
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatFormFieldModule, MatHint} from '@angular/material/form-field';
import {MatInput} from "@angular/material/input";
import {Router} from "@angular/router";
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";
import {provideNativeDateAdapter} from "@angular/material/core";

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
    MatHint
  ],
  providers: [provideNativeDateAdapter()],
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
