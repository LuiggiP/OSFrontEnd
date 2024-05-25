import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatCard, MatCardContent, MatCardImage} from "@angular/material/card";
import {MatList, MatListItem} from "@angular/material/list";
import {MatTab, MatTabGroup} from "@angular/material/tabs";

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

}
