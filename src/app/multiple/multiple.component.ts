import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiple',
  templateUrl: './multiple.component.html',
  styleUrls: ['./multiple.component.scss']
})
export class MultipleComponent implements OnInit {

  skills: any[] = [ 'Java', 'Javascript', 'Angular', 'React', 'Vue', 'MySQL', 'MongoDB', 'Python' ];

  constructor() { }

  ngOnInit() {
  }

}
