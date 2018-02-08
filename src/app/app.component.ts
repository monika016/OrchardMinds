import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OrchardDataService } from './orchard-data.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  capabilities;
  user = [];
  lead: Boolean;
  role = JSON.parse(window.sessionStorage.getItem('role'));


  logInForm = new FormGroup({
    mid: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });


  get mid() {
    return this.logInForm.get('mid');
  }

  get password() {
    return this.logInForm.get('password');
  }

  constructor(private client: OrchardDataService, private router: Router) {
    this.role = JSON.parse(window.sessionStorage.getItem('role'));

    this.client.getCapabilities().subscribe((data) => {
      this.capabilities = data;
      window.sessionStorage.setItem('capabilities', JSON.stringify(data));
      console.log(JSON.parse(window.sessionStorage.getItem('capabilities')));

    });


    this.client.getCampusMindData().subscribe((data) => {
      window.sessionStorage.setItem('campusMinds', JSON.stringify(data));
      console.log(JSON.parse(window.sessionStorage.getItem('campusMinds')));

    });

  }

  // logIn() {

  //   console.log(this.mid.value);
  //   console.log(this.password.value);


  //   this.client.getLogInData().subscribe((data) => {
  //     console.log(data);
  //     this.user.push(data);
  //     for (let i = 0; i < this.user.length; i++) {

  //       console.log(data[i]['mid']);
  //       console.log(data[i]['password']);

  //       if (this.mid.value === data[i].mid && this.password.value === data[i].password) {
  //         console.log('registered user');
  //         window.sessionStorage.setItem('role', JSON.stringify(data[i].role));
  //         console.log(JSON.parse(window.sessionStorage.getItem('role')));

  //         break;
  //       } else {
  //         console.log('not registered user');
  //       }
  //     }
  //   });


  // }


  leadPage() {
    this.role = JSON.parse(window.sessionStorage.getItem('role'));
    console.log(this.role);
    if (this.role === 'lead') { this.lead = true; }
    else {
      this.lead = false;
    }
  }

  clickFunction() {
    if (JSON.parse(window.sessionStorage.getItem('role')) == 'cm') {
      this.router.navigate(['/conf']);
    }
  }



}
