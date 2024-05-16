import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {ToolbarComponent} from "./toolbar.component/toolbar.component.component";
import {MainComponent} from "./main-screen.component/main-screen.component.component";

@Component({
  selector: 'app-main-screen',
  standalone: true,
  imports: [
    MatIcon,
    MatIconButton,
    ToolbarComponent,
    MainComponent
  ],
  templateUrl: './main-screen.component.html',
  styleUrl: './main-screen.component.css'
})
export class MainScreenComponent {

}
