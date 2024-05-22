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
  templateUrl: './the-profile-information.component.html',
  styleUrl: './the-profile-information.component.css'
})
export class TheProfileInformationComponent {

}
