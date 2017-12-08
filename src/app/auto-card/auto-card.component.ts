import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-auto-card',
  templateUrl: './auto-card.component.html',
  styleUrls: ['./auto-card.component.scss']
})
export class AutoCardComponent implements OnInit {
  @Output() pause = new EventEmitter;
  constructor() { }

  ngOnInit() {
  }

}
