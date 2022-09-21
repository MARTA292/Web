import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.css'],
})
export class BotonesComponent implements OnInit {
  @Output() pista = new EventEmitter();
  @Output() reset = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
