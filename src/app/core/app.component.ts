import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {DeviceInformationComponent} from "./public/components/device-information/device-information.component";
import {LoginSectionComponent} from "./domain/components/login-section/login-section.component"
import {CommonRegisterSectionComponent} from "./domain/components/common-register-section/common-register-section.component";
import {TaxiDriverRegisterComponent} from "./domain/components/taxiDriver-register-section/taxiDriver-register-section";
import {VehicleInformationComponent} from "./domain/components/vehicle-information/vehicle-information.component";
import {VehicleTrackingComponent} from "./domain/components/vehicle-tracking/vehicle-tracking.component";
import {ProfileSectionComponent} from "./public/components/profile-section/profile-section.component";
import {TheStartComponent} from "./public/components/start-page/the-start.component";
import {DebugToolbarComponent} from "./test/components/debug-toolbar/debug-toolbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, DeviceInformationComponent, LoginSectionComponent, CommonRegisterSectionComponent, TaxiDriverRegisterComponent, VehicleInformationComponent, VehicleTrackingComponent, ProfileSectionComponent, TheStartComponent, DebugToolbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'OSFrontEnd';
}
