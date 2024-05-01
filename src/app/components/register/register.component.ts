import { Component } from '@angular/core';
import {MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatCard, MatCardContent} from "@angular/material/card";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    MatIconButton,
    MatIcon,
    MatCard,
    MatCardContent
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

}
