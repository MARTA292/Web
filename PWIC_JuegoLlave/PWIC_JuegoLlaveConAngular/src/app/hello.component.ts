import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<header><h1>Manitas</h1><h2>Averigua donde esta la bola, si fallas me regalas tu alma</h2></header>`,
  styles: [`h1, h2 { font-family: Lato; }`],
})
export class HelloComponent {
  @Input() name: string;
}
