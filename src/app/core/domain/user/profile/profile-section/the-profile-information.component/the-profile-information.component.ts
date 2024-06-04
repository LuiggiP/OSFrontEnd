import { Component , OnInit} from '@angular/core';
import {DetailLabelComponentComponent} from "../detail-label.component/detail-label.component.component";
import {CommonModule} from "@angular/common";
import {NgOptimizedImage} from "@angular/common";
import {ApiService} from "../../../../../services/api-service";

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
  profiles: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getProfileData().subscribe((data: any) => {
      this.profiles = [...data];
    });
  }

}
