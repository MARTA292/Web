import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css'],
})
export class ImagesComponent implements OnInit {
  @Output() clickIz = new EventEmitter();
  @Output() clickDe = new EventEmitter();
  @Input() srcIz: string =
    'https://img.freepik.com/free-photo/man-hand-clenched-fist-isolated-white_103324-216.jpg?size=338&ext=jpg';
  @Input() srcDe: string =
    'https://image.freepik.com/free-photo/open-hand-isolated-white-background_58409-11407.jpg';

  constructor() {}

  ngOnInit() {}
}
