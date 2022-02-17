import { Component, OnInit } from '@angular/core';
import { CardUN } from 'src/app/models/CardUN';

@Component({
  selector: 'app-container-card-insideea',
  templateUrl: './container-card-insideea.component.html',
  styleUrls: ['./container-card-insideea.component.css']
})
export class ContainerCardInsideeaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cardListInsideEA: CardUN[] = [
    {
      author: 'Inside EA',
      date: '13-gen-2022',
      title: "Firemonkeys Studio di EA festeggia i 10 anni di The Sims FreePlay",
      subtitle: "Tutto è cominciato realizzando The Sims per dispositivi mobili: da allora è diventato uno dei titoli preferiti della serie",
      imageUrl: 'https://media.contentapi.ea.com/content/dam/firemonkeys/images/2022/01/sfp-insideea-blog-thumbnail-studio-shot.jpg.adapt.crop16x9.431p.jpg'
      
    },
    {
      author: 'Inside EA',
      date: '16-dic-2021',
      title: "Dentro Full Circle- Melvin Teo, produttore di skate.",
      subtitle: "Scopri di più sullo studio Full Circle con Melvin Teo, produttore di skate.",
      imageUrl: 'https://media.contentapi.ea.com/content/dam/news/www-ea/common/fullcircle-article-featuredimage16x9.png.adapt.crop16x9.431p.png'
      
    },
    {
      author: 'Inside EA',
      date: '2-nov-2021',
      title: "ABLE festeggia il mese nazionale di sensibilizzazione dell'occupazione per...",
      subtitle: "È il momento di educare sui problemi di handicap e celebrare i numerosi e variegati contributi dei lavoratori con disabilità",
      imageUrl: 'https://media.contentapi.ea.com/content/dam/news/www-ea/images/2021/11/ea-able-inclusion-feature-image-16x9.jpg.adapt.crop16x9.431p.jpg'
      
    },
    {
      author: 'Inside EA',
      date: '27-ott-2021',
      title: "Rafforzare il nostro impegno in materia di accessibilità e inclusione",
      subtitle: "Per ispirare il mondo a giocare, dobbiamo creare storie, personaggi, esperienze e servizi che entrino in risonanza con tutti i giocatori.",
      imageUrl: 'https://media.contentapi.ea.com/content/dam/eacom/images/2021/03/ea-featured-tile-generic-electronic-arts.png.adapt.crop16x9.431p.png'
      
    },
    {
      author: 'Inside EA',
      date: '15-ott-2021',
      title: 'Juntos: Insieme più forti',
      subtitle: 'Festeggiamo e supportiamo i dipendenti e i giocatori EA ispanici/latini',
      imageUrl: 'https://media.contentapi.ea.com/content/dam/eacom/inside-ea/images/2021/10/eacom-juntos-stronger-together-body-16x9.adapt.crop16x9.1455w.'
      
    },
    {
      author: 'Inside EA',
      date: '25-ago-2021',
      title: 'I nostri brevetti a favore del gioco positivo',
      subtitle: "Annunciamo un nuovo impegno in materia di brevetti, con l'obiettivo di condividere alcune delle nostre tecnologie più innovative.",
      imageUrl: 'https://media.contentapi.ea.com/content/dam/eacom/images/2020/06/eappp-featured-image-logo-shapes.png.adapt.crop16x9.431p.png'
      
    }
  ];
}
