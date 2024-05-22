import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {DeviceInformationComponent} from "./domain/device/device-information/device-information.component";
import {LoginSectionComponent} from "./domain/components/login-section/login-section.component"
import {CommonRegisterSectionComponent} from "./domain/user/register/common-register-section/common-register-section.component";
import {TaxiDriverRegisterComponent} from "./domain/user/register/taxiDriver-register-section/taxiDriver-register-section";
import {VehicleInformationComponent} from "./domain/vehicle/vehicle/vehicle-information/vehicle-information.component";
import {VehicleTrackingComponent} from "./domain/vehicle/tracking/vehicle-tracking/vehicle-tracking.component";
import {ProfileSectionComponent} from "./public/components/profile-section/profile-section.component";
import {TheStartComponent} from "./shared/start/start-page/the-start.component";
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
