import { Component, OnInit } from '@angular/core';
import { CardUN } from 'src/app/models/CardUN';
@Component({
  selector: 'app-container-card-fifa',
  templateUrl: './container-card-fifa.component.html',
  styleUrls: ['./container-card-fifa.component.css']
})
export class ContainerCardFIFAComponent implements OnInit {

  cardListFifa: CardUN[] = [
    {
      author: 'FIFA',
      date: '4-feb-2022',
      title: "FIFA 22|Note degli sviluppatori sugli aggiornamenti #4 e #5- EA SPORTS",
      subtitle: "FIFA 22|Note degli sviluppatori sugli aggiornamenti #4 e #5- EA SPORTS",
      imageUrl: 'https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-22/news/common/pitch-notes/title-updates/pitchnotes-22-mutedazureblue.jpg.adapt.1456w.jpg'
      
    },
    {
      author: 'FIFA',
      date: '2-feb-2022',
      title: "VOLTA Arcade- Sito ufficiale EA SPORTS",
      subtitle: "Scopri di più su VOLTA ARCADE e sui minigiochi disponibili in VOLTA FOOTBALL all'interno di FIFA 22.",
      imageUrl: 'https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-22/news/common/fifa-22-news-featured-image.png.adapt.crop16x9.431p.png'
      
    },
    {
      author: 'FIFA',
      date: '30-gen-2022',
      title: "Scambi Stelle del Futuro- FIFA 22 Ultimate Team- EA SPORTS",
      subtitle: "Scopri di più sugli scambi Stelle del Futuro e su come ottenerli in FIFA 22 Ultimate Team.",
      imageUrl: 'https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-22/news/common/future-stars/fifa-fut22-motif-010722-16x9.jpg.adapt.1456w.jpg'
      
    },
    {
      author: 'FIFA',
      date: '11-gen-2022',
      title: "FIFA 22|Note degli sviluppatori- Aggiornamento violazione account- EA S...",
      subtitle: "Aggiornamento sull'indagine riguardante i tentativi di violazione degli account FIFA, inclusi i provvedimenti adottati per aumentare le misure di sicurezza degli Account EA",
      imageUrl: 'https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-22/news/common/pitch-notes-featured-images/pitch-notes-update-dark.png.adapt.1456w.png'
      
    },
    {
      author: 'FIFA',
      date: '31-dic-2021',
      title: "Protagonisti FUT 22- FIFA 22 Ultimate Team- EA SPORTS",
      subtitle: "Celebra i giocatori più in forma del momento con i Protagonisti in FIFA 22 Ultimate Team!",
      imageUrl: 'https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-22/news/common/headliners/fut22-headliners-squad-16x9.jpg.adapt.1920w.jpg'
      
    },
    {
      author: 'FIFA',
      date: '17-dic-2021',
      title: "Jolly invernali FUT- FIFA 22 Ultimate Team- Sito ufficiale EA SPORTS",
      subtitle: "Presentazione dei Jolly invernali in FIFA 22 Ultimate Team!",
      imageUrl: 'https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-22/news/common/winter-wildcards/fut22-winterwildcards-16x9-r2.jpg.adapt.1920w.jpg'
      
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
