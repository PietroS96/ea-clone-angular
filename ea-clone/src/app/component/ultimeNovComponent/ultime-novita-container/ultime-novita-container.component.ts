import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ListUN } from 'src/app/models/CardUN';

@Component({
  selector: 'app-ultime-novita-container',
  templateUrl: './ultime-novita-container.component.html',
  styleUrls: ['./ultime-novita-container.component.css']
})
export class UltimeNovitaContainerComponent implements OnInit {
  
  constructor() { 
    
  }

  ngOnInit(): void {
  }

  listItem: ListUN[]=[
    {
      name: "Notizie EA",
      class: "show"
    },
    {
      name: "EA Play",
      class: "show"
    },
    {
      name: "Madden NFL™",
      class: "show"
    },
    {
      name: "Apex Legends",
      class: "show"
    },
    {
      name: "FIFA",
      class: "show"
    },
    {
      name:"Battlefield",
      class: "show"
    },
    {
      name:"The Sims™ 4",
      class: "show"
    },
    {
      name:"F1® 2021",
      class: "show"
    },
    {
      name:"Inside EA",
      class: "show"
    }
  ]
  selectedItem=0

  numeroRicevuto($event: number){
    this.selectedItem= $event
    console.log($event)
    return $event
  }

}
