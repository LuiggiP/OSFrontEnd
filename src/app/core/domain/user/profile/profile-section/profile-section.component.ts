import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {MatFormField} from "@angular/material/form-field";
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {MatList, MatListItem} from "@angular/material/list";
import {MatButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";
import {MatToolbar} from "@angular/material/toolbar";
import {TheProfileToolbarComponent} from "./the-profile-toolbar.component/the-profile-toolbar.component";
import {
  TheProfileInformationComponent
} from "./the-profile-information.component/the-profile-information.component";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatTabGroup,
    MatTab,
    MatList,
    MatListItem,
    MatButton,
    MatInput,
    MatToolbar,
    TheProfileToolbarComponent,
    TheProfileInformationComponent
  ],
  templateUrl: './profile-section.component.html',
  styleUrl: './profile-section.component.css'
})
export class ProfileSectionComponent {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });


}
