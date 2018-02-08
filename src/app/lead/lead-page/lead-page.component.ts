import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-lead-page',
  templateUrl: './lead-page.component.html',
  styleUrls: ['./lead-page.component.css']
})
export class LeadPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {

        console.log(JSON.parse(window.sessionStorage.getItem('role')));

  }

}
