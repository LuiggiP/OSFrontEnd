import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatToolbar} from "@angular/material/toolbar";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'login-toolbar',
  standalone: true,
    imports: [
        MatIcon,
        MatToolbar,
        NgOptimizedImage
    ],
  templateUrl: './login-toolbar.component.component.html',
  styleUrl: './login-toolbar.component.component.css'
})
export class LoginToolbarComponent {

}
