import { Component, OnInit } from '@angular/core';
import { CardUN } from 'src/app/models/CardUN';

@Component({
  selector: 'app-container-card-f12021',
  templateUrl: './container-card-f12021.component.html',
  styleUrls: ['./container-card-f12021.component.css']
})
export class ContainerCardF12021Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cardListF12021: CardUN[] = [
    {
      author: 'F1® 2021',
      date: '26-gen-2022',
      title: "F1® 2021- Pass Podio Seroe 4",
      subtitle: "Sblocca oggetti ispirati dai creatori in questa serie del Pass Podio",
      imageUrl: 'https://media.contentapi.ea.com/content/dam/ea/f1/f1-2021/news/images/2022/01/f12021-podium-pass-series4-news-section-thumb-it.jpg.adapt.crop16x9.431p.jpg'
      
    },
    {
      author: 'F1® 2021',
      date: '24-gen-2022',
      title: "F1® 2021- Sotto i riflettori: patch 1.15",
      subtitle: "È il momento di puntare i riflettori su alcune delle altre novità e modifiche in arrivo oggi",
      imageUrl: 'https://media.contentapi.ea.com/content/dam/ea/f1/f1-2021/images/2022/01/pj-f121-abu-rai.png.adapt.crop16x9.431p.png'
      
    },
    {
      author: 'F1® 2021',
      date: '24-gen-2022',
      title: "F1® 2021- Note sulla patch 1.15",
      subtitle: "Scopri di più sull'ultima patch",
      imageUrl: 'https://media.contentapi.ea.com/content/dam/ea/f1/f1-2021/news/images/2022/01/pj-f121-abu-sai.png.adapt.crop16x9.431p.png'
      
    },
    {
      author: 'F1® 2021',
      date: '12-gen-2022',
      title: "F1® 2021- Aggiornamento finale delle valutazione dei piloti",
      subtitle: "Dopo 22 gare di strabiliante azione, è il momento di aggiornare le valutazioni dei piloti di F1® 2021 per l'ultima volta",
      imageUrl: 'https://media.contentapi.ea.com/content/dam/ea/f1/f1-2021/images/2022/01/f1-2021-featured-image-16x9-jan2022-web-ready.jpg.adapt.crop16x9.431p.jpg'
      
    },
    {
      author: 'F1® 2021',
      date: '10-dic-2021',
      title: 'F1® 2021- Previsione del risultato della gara finale',
      subtitle: "Scopri quale dei due aspiranti al titolo avrà la meglio durante la simulazione della gara finale a Yas Marina in F1® 2021",
      imageUrl: 'https://media.contentapi.ea.com/content/dam/ea/f1/f1-2021/news/images/2021/12/pj-f121-abu-hamver-1.jpg.adapt.crop16x9.431p.jpg'
      
    },
    {
      author: 'F1® 2021',
      date: '6-dic-2021',
      title: "F1® 2021- Aggiornamento F2™ 2021",
      subtitle: "Prova le squadre, le auto e i piloti della stagione 2021 F2™ nel nostro aggiornamento gratuito",
      imageUrl: 'https://media.contentapi.ea.com/content/dam/ea/f1/f1-2021/news/images/2021/12/pj-f121-f2-jed-pia-02.png.adapt.crop16x9.431p.png'
      
    }
  ];
}
