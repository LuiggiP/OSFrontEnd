import { Component,OnInit } from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {DetailLabelComponent} from "./detail-label.component/detail-label.component.component";
import {MatButton} from "@angular/material/button";
import {NgOptimizedImage} from "@angular/common";
import { MatIconModule } from '@angular/material/icon';
import {Router} from "@angular/router";
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {MatList, MatListItem} from "@angular/material/list";
import {CommonModule} from "@angular/common";
import {ApiService} from "../../../../services/api-service";
import {UserService} from "../../../../services/user.service";

@Component({
  selector: 'app-vehicle-tracking',
  standalone: true,
  imports: [
    MatToolbar,
    MatIconModule,
    MatIcon,
    DetailLabelComponent,
    MatButton,
    NgOptimizedImage,
    MatTabGroup,
    MatTab,
    MatList,
    MatListItem,
    CommonModule
  ],
  templateUrl: './vehicle-tracking.component.html',
  styleUrl: './vehicle-tracking.component.css'
})
export class VehicleTrackingComponent  implements OnInit{
  tracking: any = null;
  constructor(private router: Router, private apiService:ApiService, private userService: UserService) { }

  onIconCLick() {
    this.router.navigate(['/main-screen']);
  }
  ngOnInit(): void {
    const userId = this.userService.getUserId();
    if (userId) {
      this.apiService.getVehicleData(userId).subscribe((data: any) => {
        this.tracking = data;
        console.log('Vehicle data:', this.tracking);
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
