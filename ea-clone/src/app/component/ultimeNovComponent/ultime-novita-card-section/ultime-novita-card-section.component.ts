import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-ultime-novita-card-section',
  templateUrl: './ultime-novita-card-section.component.html',
  styleUrls: ['./ultime-novita-card-section.component.css']
})
export class UltimeNovitaCardSectionComponent implements OnInit {
  @Input() selectedItem:number=0;
  constructor() { }

  ngOnInit(): void {
  }
  numeroTrovato(selectedItem: any){
    console.log(selectedItem)
  }
}
