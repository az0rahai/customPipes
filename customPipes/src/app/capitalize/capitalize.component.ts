import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-capitalize',
  templateUrl: './capitalize.component.html',
  styleUrls: ['./capitalize.component.css']
})
export class CapitalizeComponent {
  text: string;
  constructor() {
    this.text = 'Mary had a liTTle lamB fOr the goat';
  }



}
