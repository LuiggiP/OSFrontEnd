import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {DeviceInformationComponent} from "./domain/device/device-information/device-information.component";
import {LoginSectionComponent} from "./domain/user/login/login-section/login-section.component"
import {CommonRegisterSectionComponent} from "./domain/user/register/common-register-section/common-register-section.component";
import {VehicleInformationComponent} from "./domain/vehicle/vehicle/vehicle-information/vehicle-information.component";
import {VehicleTrackingComponent} from "./domain/vehicle/tracking/vehicle-tracking/vehicle-tracking.component";
import {ProfileSectionComponent} from "./domain/user/profile/profile-section/profile-section.component";
import {TheStartComponent} from "./shared/start/start-page/the-start.component";
import {DebugToolbarComponent} from "./test/components/debug-toolbar/debug-toolbar.component";
import {VehicleAddComponent} from "./domain/vehicle/vehicle/vehicle-add/vehicle-add.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, DeviceInformationComponent, LoginSectionComponent, CommonRegisterSectionComponent, VehicleInformationComponent, VehicleTrackingComponent, ProfileSectionComponent, TheStartComponent, DebugToolbarComponent, VehicleAddComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'OSFrontEnd';
}
