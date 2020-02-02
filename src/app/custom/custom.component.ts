import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CustomComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
