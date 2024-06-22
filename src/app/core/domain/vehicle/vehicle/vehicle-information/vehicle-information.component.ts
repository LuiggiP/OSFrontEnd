import { Component , OnInit} from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {MatList, MatListItem, MatListItemLine, MatListItemTitle} from "@angular/material/list";
import {MatIcon} from "@angular/material/icon";
import {MatDivider} from "@angular/material/divider";
import {NgOptimizedImage} from "@angular/common";
import {CommonModule} from "@angular/common";
import {ApiService} from "../../../../services/api-service";
import {Router} from "@angular/router";
import {UserService} from "../../../../services/user.service";


@Component({
  selector: 'app-vehicleinformation',
  standalone: true,
  imports: [
    MatToolbar,
    MatCard,
    MatCardContent,
    MatButton,
    MatTabGroup,
    MatTab,
    MatList,
    MatListItem,
    MatIcon,
    MatIconButton,
    MatDivider,
    MatListItemTitle,
    MatListItemLine,
    NgOptimizedImage,
    CommonModule
  ],
  templateUrl: `./vehicle-information.component.html`,
  styleUrl: './vehicle-information.component.css'
})
export class VehicleInformationComponent implements OnInit{
  vehicle: any = null;
  constructor(private router: Router,private apiService:ApiService, private userService: UserService) { }


  ngOnInit(): void {
    const userId = this.userService.getUserId();
    if (userId) {
      this.apiService.getVehicleData(userId).subscribe((data: any) => {
        this.vehicle = data;
        console.log('Vehicle data:', this.vehicle);
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
