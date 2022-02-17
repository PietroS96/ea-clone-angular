import { Component, OnInit } from '@angular/core';
import { CardUN } from 'src/app/models/CardUN';

@Component({
  selector: 'app-container-card-maddden-nfl',
  templateUrl: './container-card-maddden-nfl.component.html',
  styleUrls: ['./container-card-maddden-nfl.component.css']
})
export class ContainerCardMadddenNFLComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cardListMaddenNFL: CardUN[] = [
    
  ];
}
