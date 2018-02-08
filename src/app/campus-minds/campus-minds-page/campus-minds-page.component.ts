import { Component, OnInit } from '@angular/core';
 @Component({
  selector: 'app-campus-minds-page',
  templateUrl: './campus-minds-page.component.html',
  styleUrls: ['./campus-minds-page.component.css']
})
export class CampusMindsPageComponent implements OnInit {


  campusMinds;
  item;

  constructor() {

    this.campusMinds = JSON.parse(window.sessionStorage.getItem('campusMinds'));
  }

  ngOnInit() {
    this.campusMinds = JSON.parse(window.sessionStorage.getItem('campusMinds'));
    console.log(this.campusMinds);
    console.log('sdsd');
  }

}
