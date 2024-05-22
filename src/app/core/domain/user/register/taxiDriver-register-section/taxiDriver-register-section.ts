import { Component } from '@angular/core';
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInput} from "@angular/material/input";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";
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
        MatOption,
        MatSelect,
        MatButton,
        MatDatepicker,
        MatDatepickerInput,
        MatDatepickerToggle
    ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './taxiDriver-register-section.html',
  styleUrl: './taxiDriver-register-section.css'
})
export class TaxiDriverRegisterComponent {
  hide = true
  constructor(private router: Router) {
  }
  onIconClick() {
    this.router.navigate(['/login'])
  }
}
