import { Component, OnInit } from '@angular/core';
import { CardUN } from 'src/app/models/CardUN';

@Component({
  selector: 'app-container-card-battlefield',
  templateUrl: './container-card-battlefield.component.html',
  styleUrls: ['./container-card-battlefield.component.css']
})
export class ContainerCardBattlefieldComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cardListBattlefield: CardUN[] = [
    {
      author: 'Battlefield 2042',
      date: '1-feb-2022',
      title: "Briefing Battlefield - Il viaggio verso la Stagione 1",
      subtitle: "Un aggiornamento sul nostro impegno per Battlefield 2042",
      imageUrl: 'https://media.contentapi.ea.com/content/dam/battlefield/battlefield-2042/images/2021/06/featured-image-battlefield-2042-article.jpg.adapt.crop16x9.431p.jpg'
      
    },
    {
      author: 'Battlefield 2042',
      date: '19-gen-2022',
      title: 'AGGIORNAMENTO № 3.2 DI BATTLEFIELD 2042',
      subtitle: "Sulla correzione di altri errori e miglioramenti al gioco",
      imageUrl: 'https://media.contentapi.ea.com/content/dam/battlefield/battlefield-2042/images/2022/01/image-1.png.adapt.crop16x9.431p.png'
      
    },
    {
      author: 'Battlefield 2042',
      date: '8-dic-2021',
      title: "AGGIORNAMENTO № 3.1 DI BATTLEFIELD 2042",
      subtitle: 'Miglioramenti al bilanciamento dei veicoli, modifiche per le armi e ulteriori correzioni di bug',
      imageUrl: 'https://media.contentapi.ea.com/content/dam/battlefield/battlefield-2042/images/2021/12/bf-2042-featured-image-hotfix-1.jpg.adapt.crop16x9.431p.jpg'
      
    },
    {
      author: 'Battlefield 2042',
      date: '1-dic-2021',
      title: "AGGIORNAMENTO № 3 DI BATTLEFIELD 2042",
      subtitle: "Correzione di ulteriori errori, modifiche al bilanciamento e miglioramenti per l'esperienza di gioco",
      imageUrl: 'https://media.contentapi.ea.com/content/dam/battlefield/battlefield-2042/images/2021/12/bf-2042-featured-image-patch-notes-3.jpg.adapt.crop16x9.431p.jpg'
      
    },
    {
      author: 'Battlefield 2042',
      date: '24-nov-2021',
      title: 'AGGIORNAMENTO № 2 DI BATTLEFIELD 2042',
      subtitle: "Correzione di altri problemi critici e bilanciamento dopo l'uscita internazionale",
      imageUrl: 'https://media.contentapi.ea.com/content/dam/battlefield/battlefield-2042/images/2021/12/bf-2042-featured-image-patch-notes-2.jpg.adapt.crop16x9.431p.jpg'
      
    },
    {
      author: 'Battlefield 2042',
      date: '23-nov-2021',
      title: "Briefing su Battlefield: aggiornamento di lancio e il futuro",
      subtitle: "Un aggiornamento sui nostri obiettivi per i prossimi mesi",
      imageUrl: 'https://media.contentapi.ea.com/content/dam/battlefield/battlefield-2042/images/2021/11/featrured-future.jpg.adapt.crop16x9.431p.jpg'
      
    }
  ];
}
