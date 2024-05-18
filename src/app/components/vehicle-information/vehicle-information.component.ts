import { Component } from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {MatList, MatListItem, MatListItemLine, MatListItemTitle} from "@angular/material/list";
import {MatIcon} from "@angular/material/icon";
import {MatDivider} from "@angular/material/divider";
import {NgOptimizedImage} from "@angular/common";
import {Router} from "@angular/router";




@Component({
  selector: 'app-vehicleinformation',
  standalone: true,
  imports: [
    MatToolbar,
    MatCard,
    MatCardContent,
    MatButton,
    MatTabGroup,
    MatTab,
    MatList,
    MatListItem,
    MatIcon,
    MatIconButton,
    MatDivider,
    MatListItemTitle,
    MatListItemLine,
    NgOptimizedImage
  ],
  templateUrl: `./vehicle-information.component.html`,
  styleUrl: './vehicle-information.component.css'
})
export class VehicleInformationComponent {

  constructor(private router: Router) { }

  onIconCLick() {
    this.router.navigate(['/main-screen']);
  }

}
