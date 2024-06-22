import { Component , OnInit} from '@angular/core';
import {DetailLabelComponentComponent} from "../detail-label.component/detail-label.component.component";
import {CommonModule} from "@angular/common";
import {NgOptimizedImage} from "@angular/common";
import {ApiService} from "../../../../../services/api-service";
import {UserService} from "../../../../../services/user.service";


@Component({
  selector: 'the-profile-information',
  standalone: true,
  imports: [
    CommonModule,
    DetailLabelComponentComponent,
    NgOptimizedImage
  ],
  templateUrl: './the-profile-information.component.html',
  styleUrl: './the-profile-information.component.css'
})

export class TheProfileInformationComponent implements OnInit{
  profile: any = null;  // Cambiado de array a objeto

  constructor(private apiService: ApiService, private userService: UserService) { }

  ngOnInit(): void {
    const userId = this.userService.getUserId();
    if (userId) {
      this.apiService.getProfileData(userId).subscribe((data: any) => {
        this.profile = data;  // Asignar directamente el objeto
      });
    }
  }

}
