import { Component, Input, OnInit } from '@angular/core';
import { CardUN } from 'src/app/models/CardUN';
@Component({
  selector: 'app-container-card-eap',
  templateUrl: './container-card-eap.component.html',
  styleUrls: ['./container-card-eap.component.css']
})
export class ContainerCardEAPComponent implements OnInit {

  cardList2: CardUN[] = [
    {
      author: 'Elettronic Art Inc',
      date: '14-mag-2021',
      title: 'Gioca a Mass Effect Legendary Edition con EA Play*Pro',
      subtitle: 'Vivi la saga cinematografica ora rimasterizzata e ottimizzata per il 4K Ultra HD',
      imageUrl: 'https://media.contentapi.ea.com/content/dam/news/ea-play-subscription/images/2020/12/ea-play-dec-content-drop-featured-image.jpg.adapt.crop16x9.431p.jpg'
      
    },
    {
      author: 'FIFA',
      date: '3-mag-2021',
      title: 'Ottieni di più da FIFA 21 con EA Play-Sito ufficiale EA SPORTS',
      subtitle: 'FIFA 21 è ora disponibile in The Play List con EA Play.',
      imageUrl: 'https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-21/news/common/eaplay-socialpost-spotlight-fifa21-16x9.png.adapt.crop16x9.431p.png'
      
    },
    {
      author: 'Electronic Arts Inc.',
      date: '1-apr-2021',
      title: "In evidenza su EA Play- Aprile 2021",
      subtitle: 'I nostri impegni e progressi nella diversità, la creazione di community più sane, la sostenibilità e molto altro.',
      imageUrl: 'https://media.contentapi.ea.com/content/dam/news/ea-play-subscription/images/2020/12/ea-play-dec-content-drop-featured-image.jpg.adapt.crop16x9.431p.jpg'
      
    },
    {
      author: 'Electronic Arts Inc.',
      date: '18-mar-2021',
      title: "EA Play è ora disponibile su Xbox Game Pass per PC trasmite l'app EA Desktop",
      subtitle: "EA Desktop, la nostra piattaforma PC di nuova generazione, è in fase di open beta. Stiamo unendo le nostre forze con Xbox per offrire più giochi agli utenti PC.",
      imageUrl: 'https://media.contentapi.ea.com/content/dam/news/ea-play-subscription/images/2021/03/ea-image-210316-game-pass-article-eaonlycore-16x9.jpg.adapt.crop16x9.431p.jpg'
      
    },
    {
      author: 'Electronic Arts Inc.',
      date: '1-mar-2021',
      title: 'In evidenza su EA Play- Marzo 2021',
      subtitle: 'Scopri le nuove ricompense e i giochi ora disponibili con il tuo abbonamento EA Play o EA Play Pro.',
      imageUrl: 'https://media.contentapi.ea.com/content/dam/news/ea-play-subscription/images/2020/12/ea-play-dec-content-drop-featured-image.jpg.adapt.crop16x9.431p.jpg'
      
    },
    {
      author: 'Electronic Arts Inc.',
      date: '25-feb-2021',
      title: 'EA Play- Prossimamente in The Play List- Primavera 2021',
      subtitle: "Scopri tutto sui nuovi giochi in arrivo su EA Play o EA Play Pro.",
      imageUrl: 'https://media.contentapi.ea.com/content/dam/news/ea-play-subscription/images/2020/12/ea-play-dec-content-drop-featured-image.jpg.adapt.crop16x9.431p.jpg'
      
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
