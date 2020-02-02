import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grouping',
  templateUrl: './grouping.component.html',
  styleUrls: ['./grouping.component.scss']
})
export class GroupingComponent implements OnInit {

  groups: any[] = [
    {
      groupName: 'Group A',
      teams: [
        { teamName: 'Real Madrid' },
        { teamName: 'Bayern Muenchen' },
        { teamName: 'Juventus' },
        { teamName: 'Manchester City' },
      ]
    },
    {
      groupName: 'Group B',
      teams: [
        { teamName: 'Inter Milan' },
        { teamName: 'Ajax Amsterdam' },
        { teamName: 'Barcelona' },
        { teamName: 'Tottenham Hotspur' },
      ]
    },
    {
      groupName: 'Group C',
      teams: [
        { teamName: 'Liverpool' },
        { teamName: 'AC Milan' },
        { teamName: 'PSG' },
        { teamName: 'Borussia Dortmun' },
      ]
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
