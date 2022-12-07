import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss'],
})
export class EventosComponent implements OnInit {
  eventos: any[] = [
    {
      tema: 'Angular 11',
      local: 'Rio de Janeiro',
    },
    {
      tema: 'Angular 14',
      local: 'Fortaleza',
    },
    {
      tema: '.NET',
      local: 'Rio Grande do Norte',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
