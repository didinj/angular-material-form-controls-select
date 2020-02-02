import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BasicComponent implements OnInit {

  selectedItem: string;
  panelColor = new FormControl('red');

  teams: any[] = [
    { name: 'Liverpool' },
    { name: 'Manchester City' },
    { name: 'Manchester United' },
    { name: 'Arsenal' },
    { name: 'Leicester City' },
    { name: 'Chelsea' },
    { name: 'Tottenham Hotspur' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
