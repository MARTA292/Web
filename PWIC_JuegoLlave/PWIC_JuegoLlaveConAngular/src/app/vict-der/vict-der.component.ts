import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vict-der',
  templateUrl: './vict-der.component.html',
  styleUrls: ['./vict-der.component.css'],
})
export class VictDerComponent implements OnInit {
  @Input() victoria: number = 0;
  @Input() derrota: number = 0;

  constructor() {}

  ngOnInit() {}
}
