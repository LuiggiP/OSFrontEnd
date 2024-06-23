import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatCard, MatCardContent, MatCardImage} from "@angular/material/card";
import {MatList, MatListItem} from "@angular/material/list";
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";


@Component({
  selector: 'main-screen',
  standalone: true,
    imports: [
        MatIcon,
        MatCard,
        MatCardContent,
        MatCardImage,
        MatList,
        MatListItem,
        MatTab,
        MatTabGroup
    ],
  templateUrl: './the-start-section.component.html',
  styleUrl: './the-start-section.component.css'
})
export class MainComponent {

  constructor(private _snackBar: MatSnackBar, private router: Router) { }


  ShowVehicleInfo() {
    this.router.navigate(['/vehicle-information']);
  }
  ShowDeviceInfo() {
    this.router.navigate(['/device-information']);
  }
  AddVehicle() {
    this.router.navigate(['/vehicle-add']);
  }
}
