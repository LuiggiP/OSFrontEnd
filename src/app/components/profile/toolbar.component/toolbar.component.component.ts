import { Component } from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {NgOptimizedImage} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'the-toolbar',
  standalone: true,
  imports: [
    MatToolbar,
    MatIcon,
    NgOptimizedImage
  ],
  templateUrl: './toolbar.component.component.html',
  styleUrl: './toolbar.component.component.css'
})
export class ToolbarComponentComponent {
  constructor(private router: Router) { }
  logout() {
    this.router.navigate(['/login']);
  }
  onIconCLick() {
    this.router.navigate(['/main-screen']);
  }
}
