import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DeviceInformationComponent} from "./components/device-information/device-information.component";
import {LocationSharingComponent} from "./components/location-sharing/location-sharing.component";
import {LoginComponent} from "./components/login/login.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DeviceInformationComponent, LocationSharingComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'OSFrontEnd';
}
