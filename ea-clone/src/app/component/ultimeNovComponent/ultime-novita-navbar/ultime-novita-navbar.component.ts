import {  Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ListUN } from 'src/app/models/CardUN';
@Component({
  selector: 'app-ultime-novita-navbar',
  templateUrl: './ultime-novita-navbar.component.html',
  styleUrls: ['./ultime-novita-navbar.component.css']
})
export class UltimeNovitaNavbarComponent implements OnInit {
  @Input() listItem:ListUN[]=[];
  @Input() selectedItem:number=0;
  @Output() inviaNumeroItem = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  provaclick(){
    this.inviaNumeroItem.emit(this.selectedItem)
    console.log(this.selectedItem)
  }
}
