import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DeviceInformationComponent} from "./components/device-information/device-information.component";
import {LocationSharingComponent} from "./components/location-sharing/location-sharing.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {VehicleInformationComponent} from "./components/vehicle-information/vehicle-information.component";
import {VehicleTrackingComponent} from "./components/vehicle-tracking/vehicle-tracking.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {MainScreenComponent} from "./components/main-screen/main-screen.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DeviceInformationComponent, LocationSharingComponent, LoginComponent, RegisterComponent, VehicleInformationComponent, VehicleTrackingComponent, ProfileComponent, MainScreenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'OSFrontEnd';
}
