import { Component, OnInit } from '@angular/core';
import { CardUN } from 'src/app/models/CardUN';

@Component({
  selector: 'app-container-card-the-sims4',
  templateUrl: './container-card-the-sims4.component.html',
  styleUrls: ['./container-card-the-sims4.component.css']
})
export class ContainerCardTheSims4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cardListTheSims4: CardUN[] = [
    
  ];
}
