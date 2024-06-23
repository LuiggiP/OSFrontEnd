import { Component } from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {NgOptimizedImage} from "@angular/common";
import {Router} from "@angular/router";
import {UserService} from "../../../../services/user.service";

@Component({
  selector: 'the-toolbar',
  standalone: true,
  imports: [
    MatToolbar,
    MatIcon,
    NgOptimizedImage
  ],
  templateUrl: './the-start-toolbar.html',
  styleUrl: './the-start-toolbar.css'
})
export class ToolbarComponent {
  constructor(private router: Router, private userService: UserService) { }
  logout() {
    this.userService.clearUserData();  // Eliminar token y ID del usuario
    this.router.navigate(['/login']);
  }
  profile() {
    this.router.navigate(['/profile']);
  }
}
