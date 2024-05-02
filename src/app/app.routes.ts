import { Routes } from '@angular/router';
import {VehicleInformationComponent} from "./components/vehicle-information/vehicle-information.component";
import {RegisterComponent} from "./components/register/register.component";
import {LoginComponent} from "./components/login/login.component";
import {MainScreenComponent} from "./components/main-screen/main-screen.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {DeviceInformationComponent} from "./components/device-information/device-information.component";
import {LocationSharingComponent} from "./components/location-sharing/location-sharing.component";
import {VehicleTrackingComponent} from "./components/vehicle-tracking/vehicle-tracking.component";

export const routes: Routes = [
  {
    path: 'login', component: LoginComponent,
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'main-screen', component: MainScreenComponent
  },
  {
    path: 'profile', component: ProfileComponent
  },
  {
    path: 'device-information', component: DeviceInformationComponent
  },
  {
    path: 'location-sharing', component: LocationSharingComponent
  },
  {
    path: 'vehicle-information', component: VehicleInformationComponent
  },
  {
    path: 'vehicle-tracking', component: VehicleTrackingComponent
  }

];
