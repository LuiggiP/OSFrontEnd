import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatCard, MatCardContent, MatCardImage} from "@angular/material/card";

@Component({
  selector: 'main-screen',
  standalone: true,
  imports: [
    MatIcon,
    MatCard,
    MatCardContent,
    MatCardImage
  ],
  templateUrl: './main-screen.component.component.html',
  styleUrl: './main-screen.component.component.css'
})
export class MainComponent {

}
