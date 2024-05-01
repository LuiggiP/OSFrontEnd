import { Component } from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-device-information',
  standalone: true,
  imports: [
    MatToolbar,
    MatCard,
    MatCardContent,
    MatButton
  ],
  templateUrl: './device-information.component.html',
  styleUrl: './device-information.component.css'
})
export class DeviceInformationComponent {

}
