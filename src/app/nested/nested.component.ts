import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nested',
  templateUrl: './nested.component.html',
  styleUrls: ['./nested.component.scss']
})
export class NestedComponent implements OnInit {

  group = '';
  team = '';
  player = '';
  groups: any[] = [
    {
      groupName: 'Group A',
      teams: [
        {
          teamName: 'Real Madrid',
          players: [
            { playerName: 'Karim Benzema' },
            { playerName: 'Luca Modric' },
            { playerName: 'Eden Hazard' },
          ]
        },
        {
          teamName: 'Bayern Munich',
          players: [
            { playerName: 'Phillipe Coutinho' },
            { playerName: 'Benjamin Pavard' },
            { playerName: 'Thomas Muller' },
          ]
        },
        {
          teamName: 'Juventus',
          players: [
            { playerName: 'Christiano Ronaldo' },
            { playerName: 'Aaron Ramsey' },
            { playerName: 'Emre Can' },
          ]
        },
        {
          teamName: 'Manchester City',
          players: [
            { playerName: 'David Silva' },
            { playerName: 'Leroy Sane' },
            { playerName: 'Riyad Mahrez' },
          ]
        },
      ]
    },
    {
      groupName: 'Group B',
      teams: [
        {
          teamName: 'Liverpool',
          players: [
            { playerName: 'Sadio Mane' },
            { playerName: 'Robertson' },
            { playerName: 'Fabinho' },
          ]
        },
        {
          teamName: 'AC Milan',
          players: [
            { playerName: 'Ibrahimovic' },
            { playerName: 'Andrea Conti' },
            { playerName: 'Fabio Borini' },
          ]
        },
        {
          teamName: 'PSG',
          players: [
            { playerName: 'Kylian Mbappe' },
            { playerName: 'Edison Cavani' },
            { playerName: 'Thiago Silva' },
          ]
        },
        {
          teamName: 'Borussia Dortmund',
          players: [
            { playerName: 'Axel Witsel' },
            { playerName: 'Mats Hummels' },
            { playerName: 'Marco Reus' },
          ]
        },
      ]
    },
  ];
  teams: any[] = [];
  players: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  showTeams(e: any) {
    this.teams = e.value.teams;
  }

  showPlayers(e: any) {
    this.players = e.value.players;
  }

}
