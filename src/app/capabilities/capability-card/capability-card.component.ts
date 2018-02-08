import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-capability-card',
  templateUrl: './capability-card.component.html',
  styleUrls: ['./capability-card.component.css']
})
export class CapabilityCardComponent implements OnInit {

  @Input() item;


  constructor() {

  }

  ngOnInit() {
  }

}
