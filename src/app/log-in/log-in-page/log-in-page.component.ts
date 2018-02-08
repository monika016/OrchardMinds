import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OrchardDataService } from '../../orchard-data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-log-in-page',
  templateUrl: './log-in-page.component.html',
  styleUrls: ['./log-in-page.component.css']
})
export class LogInPageComponent implements OnInit {

  capabilities;
  user = [];

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

  logIn() {
    console.log(this.mid.value);
    console.log(this.password.value);

    this.client.getLogInData().subscribe((data) => {

      this.user.push(data);
      console.log('jdjndfdjkfnd');
      console.log(this.user);
      for (let i = 0; i <= this.user.length; i++) {
        console.log('-----');
        console.log(data[i]['mid']);
        console.log(data[i]['password']);

        if (this.mid.value === data[i].mid && this.password.value === data[i].password) {
          window.sessionStorage.setItem('role', JSON.stringify(data[i].role));
          console.log(JSON.parse(window.sessionStorage.getItem('role')));
          window.sessionStorage.setItem('loggedIn', 'true');
          console.log(' registered user');
          //  this.router.navigate(['/log-in/conf']);
          break;
        } else {
          console.log('not registered user');
          window.sessionStorage.setItem('loggedIn', 'false');

        }
      }
    });

     this.router.navigate(['/capabilities']);




  }


  ngOnInit() {
  }

}
