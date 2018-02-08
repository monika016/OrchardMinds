import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-capability-page',
  templateUrl: './capability-page.component.html',
  styleUrls: ['./capability-page.component.css']
})
export class CapabilityPageComponent implements OnInit {

  capabilities = JSON.parse(window.sessionStorage.getItem('capabilities'));



  constructor() {
    this.capabilities = JSON.parse(window.sessionStorage.getItem('capabilities'));
  }

  ngOnInit() {
  this.capabilities = JSON.parse(window.sessionStorage.getItem('capabilities'));

  }

}
