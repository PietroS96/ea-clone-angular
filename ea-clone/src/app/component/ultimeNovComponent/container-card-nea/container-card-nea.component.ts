import { Component, Input, OnInit } from '@angular/core';
import { CardUN } from 'src/app/models/CardUN';

@Component({
  selector: 'app-container-card-nea',
  templateUrl: './container-card-nea.component.html',
  styleUrls: ['./container-card-nea.component.css']
})
export class ContainerCardNEAComponent implements OnInit {
  
  cardListNEA: CardUN[] = [
    {
      author: 'Elettronic Art Inc.',
      date: '25-gen-2022',
      title: 'EA e Lucasfilm Games annunciano i nuovi titoli di Star Wars targati Respawn...',
      subtitle: 'I prossimi titoli includono il futuro gioco della serie Star Wars Jedi, un nuovo FPS di Star Wars diretto da Peter Hirschmann e un gioco di strategia frutto della collaborazione tra Respawn e Bit Reactor',
      imageUrl: 'https://media.contentapi.ea.com/content/dam/eacom/images/2022/01/ea-star-wars-featured-image-web.png.adapt.crop16x9.1455w.png'
      
    },
    {
      author: 'Elettronic Art Inc.',
      date: '15-dic-2021',
      title: 'I client di Origin ed EA Desktop non sono stati colpiti dalla vulnerabilità...',
      subtitle: 'Alla fine della scorsas settimana è stata resa nota una vulnerabilità estremamente grave nella sicurezza della popolare libreria di registrazione basata su Java "Log4j 2" (CVE-2021-44228, alias "Log4Shell").',
      imageUrl: 'https://media.contentapi.ea.com/content/dam/eacom/images/2021/03/ea-featured-tile-generic-electronic-arts.png.adapt.crop16x9.431p.png'
      
    },
    {
      author: 'Electronic Arts Inc.',
      date: '16-nov-2021',
      title: "Condividi il nostro Rapporto sull'impatto del 2021",
      subtitle: 'I nostri impegni e progressi nella diversità, la creazione di community più sane, la sostenibilità e molto altro.',
      imageUrl: 'https://media.contentapi.ea.com/content/dam/eacom/images/2021/03/ea-featured-tile-generic-electronic-arts.png.adapt.crop16x9.431p.png'
      
    },
    {
      author: 'Battlefield 2042',
      date: '10-nov-2021',
      title: "Briefing Battlefield: preparatevi all'uscita",
      subtitle: "Preparatevi all'uscita di Battlefield 2042.",
      imageUrl: 'https://media.contentapi.ea.com/content/dam/battlefield/battlefield-2042/images/2021/06/featured-image-battlefield-2042-article.jpg.adapt.crop16x9.431p.jpg'
      
    },
    {
      author: 'Inside EA',
      date: '27-ott-2021',
      title: 'Rafforzare il nostro impegno in materia di accessibilità e inclusione',
      subtitle: 'Per ispirare il mondo a giocare, dobbiamo creare storie, personaggi, esperienze e servizi che entrino in risonanza con tutti i giocatori.',
      imageUrl: 'https://media.contentapi.ea.com/content/dam/eacom/images/2021/03/ea-featured-tile-generic-electronic-arts.png.adapt.crop16x9.431p.png'
      
    },
    {
      author: 'Electronic Arts Inc.',
      date: '21-ott-2021',
      title: 'EA e Discond hanno collaborato per attivare la Rich Presence',
      subtitle: "La Rich Presence consente agli amici di sapere a quale gioco stai giocando nell'app EA.",
      imageUrl: 'https://media.contentapi.ea.com/content/dam/eacom/images/2021/03/ea-featured-tile-generic-electronic-arts.png.adapt.crop16x9.431p.png'
      
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
