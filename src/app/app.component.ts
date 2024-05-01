import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DeviceInformationComponent} from "./components/device-information/device-information.component";
import {LocationSharingComponent} from "./components/location-sharing/location-sharing.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DeviceInformationComponent, LocationSharingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'OSFrontEnd';
}
