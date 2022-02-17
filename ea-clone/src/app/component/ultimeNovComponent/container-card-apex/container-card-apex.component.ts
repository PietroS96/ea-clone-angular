import { Component, OnInit } from '@angular/core';
import { CardUN } from 'src/app/models/CardUN';

@Component({
  selector: 'app-container-card-apex',
  templateUrl: './container-card-apex.component.html',
  styleUrls: ['./container-card-apex.component.css']
})
export class ContainerCardApexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cardListApex: CardUN[] = [
    {
      author: 'Apex Legends',
      date: '15-feb-2022',
      title: '3° anniversario- Incontra la community di Apex Legends',
      subtitle: "In occasione del 3° anniversario del gioco, abbiamo deciso di dare spazio ai creator e ai gruppi della community che ci hanno aiutato a crescere. Torna ogni settimana per l'intera durata della stagione per conoscere i nostri ...",
      imageUrl: 'https://media.contentapi.ea.com/content/dam/apex-legends/common/articles/season-12-weekly-community-features/kandyrew.png.adapt.1456w.png'
      
    },
    {
      author: 'Apex Legends',
      date: '10-feb-2022',
      title: "Celebra 3 anni di Apex Legends con l'evento collezione Anniversario",
      subtitle: "Festeggia il 3° anniversario del gioco con skin per la squadra, un contatore premi creato dalla community e l'arrivo delle skin Prestigio!",
      imageUrl: 'https://media.contentapi.ea.com/content/dam/apex-legends/common/articles/anniversary-collection-event/apex-anniversary-blog-thumbnail.jpg.adapt.crop16x9.431p.jpg'
      
    },
    {
      author: 'Apex Legends',
      date: '7-apr-2022',
      title: "Apex Legends- Stagione 12- Note sulla patch",
      subtitle: "Dai un'occhiata alle note sulla patch e scopri le novità della Stagione 12, in arivo l'8 febbraio!",
      imageUrl: 'https://media.contentapi.ea.com/content/dam/apex-legends/common/articles/defiance-patch-notes/picture1.jpg.adapt.1456w.jpg'
      
    },
    {
      author: 'Apex Legends',
      date: '1-feb-2022',
      title: "Aggiornamento mappa- Il sabotaggio di Olympus",
      subtitle: "Pare che dietro all'improvvisa perdita di quota di Olympus ci sia Mad Maggie. Esplora il caos e scopri com'è cambiata la mappa",
      imageUrl: 'https://media.contentapi.ea.com/content/dam/apex-legends/common/articles/defiance-olympuas-map-update/apex-legends-screenshots-s12-map-sabotagedolympus-b-clean-min.png.adapt.1456w.png'
      
    },
    {
      author: 'Apex Legends',
      date: '31-gen-2022',
      title: "Nuova modalità a tempo limitato: Controllo",
      subtitle: "Arriva Controllo, la nuova modalità 9v9! Scegli l'equipaggiamento, lanciati in battaglia, rientra in gioco all'infinito e prendi il comando.",
      imageUrl: 'https://media.contentapi.ea.com/content/dam/apex-legends/common/articles/control-ltm-blog/common/picture32.png.adapt.crop16x9.431p.png'
      
    },
    {
      author: 'Apex Legends',
      date: '24-gen-2022',
      title: "Celebra il terzo anniversario di Apex Legends e ottieni ricompense",
      subtitle: "Partecipa ai festeggiamenti per il terzo anniversario del gioco e ricevi ricompense d'accesso!",
      imageUrl: 'https://media.contentapi.ea.com/content/dam/apex-legends/common/articles/three-year-anniversary/picture19.jpg.adapt.crop16x9.431p.jpg'
      
    }
  ];
}
