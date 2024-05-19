import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'the-debug-toolbar',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './debug-toolbar.component.html',
  styleUrl: './debug-toolbar.component.css'
})
export class DebugToolbarComponent {

}
