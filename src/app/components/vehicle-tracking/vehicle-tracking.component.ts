import { Component } from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-vehicle-tracking',
  standalone: true,
  imports: [
    MatToolbar,
    MatIcon
  ],
  templateUrl: './vehicle-tracking.component.html',
  styleUrl: './vehicle-tracking.component.css'
})
export class VehicleTrackingComponent {

}
