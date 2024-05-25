import { Component } from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {DetailLabelComponent} from "./detail-label.component/detail-label.component.component";
import {MatButton} from "@angular/material/button";
import {NgOptimizedImage} from "@angular/common";
import { MatIconModule } from '@angular/material/icon';
import {Router} from "@angular/router";
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {MatList, MatListItem} from "@angular/material/list";

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
    MatListItem
  ],
  templateUrl: './vehicle-tracking.component.html',
  styleUrl: './vehicle-tracking.component.css'
})
export class VehicleTrackingComponent {
  constructor(private router: Router) { }

  onIconCLick() {
    this.router.navigate(['/main-screen']);
  }
}
