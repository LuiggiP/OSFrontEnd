import { Component } from '@angular/core';
import {DetailLabelComponentComponent} from "../detail-label.component/detail-label.component.component";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'the-profile-information',
  standalone: true,
  imports: [
    DetailLabelComponentComponent,
    NgOptimizedImage
  ],
  templateUrl: './profile-information.component.component.html',
  styleUrl: './profile-information.component.component.css'
})
export class ProfileInformationComponentComponent {

}
