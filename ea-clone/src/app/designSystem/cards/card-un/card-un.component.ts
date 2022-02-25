import { Component, Input, OnInit } from '@angular/core';
import { CardUN } from 'src/app/models/CardUN';

@Component({
  selector: 'app-card-un',
  templateUrl: './card-un.component.html',
  styleUrls: ['./card-un.component.css']
})
export class CardUNComponent implements OnInit {
  @Input () cardUN!: CardUN;

  constructor() { }

  ngOnInit(): void {
  }

}
