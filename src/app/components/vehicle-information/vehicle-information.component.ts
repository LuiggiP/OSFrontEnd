import { Component } from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {MatList, MatListItem} from "@angular/material/list";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-vehicle-information',
  standalone: true,
  imports: [
    MatToolbar,
    MatCard,
    MatCardContent,
    MatTabGroup,
    MatTab,
    MatListItem,
    MatList,
    MatButton
  ],
  templateUrl: './vehicle-information.component.html',
  styleUrl: './vehicle-information.component.css'
})
export class VehicleInformationComponent {

}
