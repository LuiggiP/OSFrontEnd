import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getProfileData(){
    return this.http.get(`https://fabrizio0711.github.io/Fake-Apis/Profile-data.json`);
  }

  getDeviceData(){
    return this.http.get(`https://fabrizio0711.github.io/Fake-Apis/device-data.json`);
  }
  getVehicleData(){
    return this.http.get(`https://fabrizio0711.github.io/Fake-Apis/vehicle-data.json`);
  }

}
