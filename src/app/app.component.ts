import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DeviceInformationComponent} from "./components/device-information/device-information.component";
import {LocationSharingComponent} from "./components/location-sharing/location-sharing.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {ProfileComponent} from "./components/profile/profile.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DeviceInformationComponent, LocationSharingComponent, LoginComponent, RegisterComponent, ProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'OSFrontEnd';
}
