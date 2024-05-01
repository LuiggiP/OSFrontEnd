import { Component } from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {MatList, MatListItem} from "@angular/material/list";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-location-sharing',
  standalone: true,
  imports: [
    MatToolbar,
    MatCard,
    MatCardContent,
    MatTabGroup,
    MatTab,
    MatList,
    MatListItem,
    MatButton
  ],
  templateUrl: './location-sharing.component.html',
  styleUrl: './location-sharing.component.css'
})
export class LocationSharingComponent {

}
