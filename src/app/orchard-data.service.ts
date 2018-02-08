import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class OrchardDataService {

  constructor(private http: HttpClient) { }


  getCapabilities() {
    return this.http.get('../assets/Capabilities.json');
  }

  getCampusMindData() {
    return this.http.get('../assets/CampusMinds.json');

  }

  getLogInData() {
    return this.http.get('../assets/users.json');
  }

}
