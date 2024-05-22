import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {ToolbarComponent} from "./the-start-toolbar.component/the-start-toolbar";
import {MainComponent} from "./the-start-section.component/the-start-section.component";

@Component({
  selector: 'app-main-screen',
  standalone: true,
  imports: [
    MatIcon,
    MatIconButton,
    ToolbarComponent,
    MainComponent
  ],
  templateUrl: './the-start.component.html',
  styleUrl: './the-start.component.css'
})
export class TheStartComponent {

}
