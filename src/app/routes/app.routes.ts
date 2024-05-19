import { Routes } from '@angular/router';
import {VehicleInformationComponent} from "../core/domain/components/vehicle-information/vehicle-information.component";
import {CommonRegisterSectionComponent} from "../core/domain/components/common-register-section/common-register-section.component";
import {LoginSectionComponent} from "../core/domain/components/login-section/login-section.component";
import {TheStartComponent} from "../core/public/components/start-page/the-start.component";
import {ProfileSectionComponent} from "../core/public/components/profile-section/profile-section.component";
import {DeviceInformationComponent} from "../core/public/components/device-information/device-information.component";
import {VehicleTrackingComponent} from "../core/domain/components/vehicle-tracking/vehicle-tracking.component";
import {TaxiDriverRegisterComponent} from "../core/domain/components/taxiDriver-register-section/taxiDriver-register-section";



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
    path: 'taxi-driver-register', component: TaxiDriverRegisterComponent
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
