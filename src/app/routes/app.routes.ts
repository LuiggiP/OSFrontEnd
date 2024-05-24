import { Routes } from '@angular/router';
import {VehicleInformationComponent} from "../core/domain/vehicle/vehicle/vehicle-information/vehicle-information.component";
import {CommonRegisterSectionComponent} from "../core/domain/user/register/common-register-section/common-register-section.component";
import {LoginSectionComponent} from "../core/domain/user/login/login-section/login-section.component";
import {TheStartComponent} from "../core/shared/start/start-page/the-start.component";
import {ProfileSectionComponent} from "../core/domain/user/profile/profile-section/profile-section.component";
import {DeviceInformationComponent} from "../core/domain/device/device-information/device-information.component";
import {VehicleTrackingComponent} from "../core/domain/vehicle/tracking/vehicle-tracking/vehicle-tracking.component";



export const routes: Routes = [
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },
  {
    path: 'login', component: LoginSectionComponent,
  },
  {
    path: 'common-register', component: CommonRegisterSectionComponent
  },
  {
    path: 'start', component: TheStartComponent
  },
  {
    path: 'profile', component: ProfileSectionComponent
  },
  {
    path: 'device-information', component: DeviceInformationComponent
  },
  {
    path: 'vehicle-information', component: VehicleInformationComponent
  },
  {
    path: 'vehicle-tracking', component: VehicleTrackingComponent
  }
];
