import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-campus-mind-card',
  templateUrl: './campus-mind-card.component.html',
  styleUrls: ['./campus-mind-card.component.css']
})
export class CampusMindCardComponent implements OnInit {

@Input('item') item;



  constructor() {
            console.log(this.item);
    }

  ngOnInit() {
        console.log(this.item);

  }

}
