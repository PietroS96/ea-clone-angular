import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-footer-language-container',
  templateUrl: './footer-language-container.component.html',
  styleUrls: ['./footer-language-container.component.css'],
})
export class FooterLanguageContainerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  toggleMenu(ele: any) {
    ele.classList.toggle('panel-hide');
  }
}
