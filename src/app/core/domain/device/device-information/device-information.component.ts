import { Component, OnInit } from '@angular/core';
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatToolbar, MatToolbarModule} from "@angular/material/toolbar";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {Router} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";
import {DetailLabelComponent} from "./detail-label.component/detail-label.component.component";
import {CommonModule} from "@angular/common";
import {ApiService} from "../../../services/api-service";
import {UserService} from "../../../services/user.service";

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
  DetailLabelComponent,
    CommonModule
  ],
  templateUrl: './device-information.component.html',
  styleUrl: './device-information.component.css'
})
export class DeviceInformationComponent implements OnInit{

  device: any = null;
  constructor(private router: Router, private apiService: ApiService, private userService: UserService) { }

  onIconCLick() {
    this.router.navigate(['/main-screen']);
  }

  ngOnInit(): void {
    const userId = this.userService.getUserId();
    if (userId) {
      this.apiService.getDeviceData(userId).subscribe((data: any) => {
        this.device = data;
        console.log('Device data:', this.device);
      });
    }

  }

  SeeProfile() {
    this.router.navigate(['/profile']);
  }
  ReturnHome() {
    this.router.navigate(['/start']);
  }

}
