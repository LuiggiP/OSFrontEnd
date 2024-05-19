import { Component } from '@angular/core';
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatToolbar, MatToolbarModule} from "@angular/material/toolbar";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {Router} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";
import {DetailLabelComponent} from "./detail-label.component/detail-label.component.component";

@Component({
  selector: 'DeviceInformationComponent',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatToolbarModule,
    MatIconModule,
    MatToolbar,
    MatButton,
    MatIconButton,
    NgOptimizedImage,
  DetailLabelComponent
  ],
  templateUrl: './device-information.component.html',
  styleUrl: './device-information.component.css'
})
export class DeviceInformationComponent {
  constructor(private router: Router) { }

  onIconCLick() {
    this.router.navigate(['/main-screen']);
  }
}
