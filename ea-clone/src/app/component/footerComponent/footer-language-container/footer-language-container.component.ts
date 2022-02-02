import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-language-container',
  templateUrl: './footer-language-container.component.html',
  styleUrls: ['./footer-language-container.component.css'],
})
export class FooterLanguageContainerComponent implements OnInit {
  visibility: boolean = false;
  innerWidth: any;
  constructor() {}

  ngOnInit(): void {}
  rotateArrow(ele: HTMLElement) {
    ele.classList.toggle('rotate-arrow');
  }
  cancelBorder(ele: HTMLElement) {
    ele.classList.toggle('change-border');
  }
  showPanel(ele: HTMLElement) {
    if (this.innerWidth > 1024) {
      this.visibility = !this.visibility;
    } else {
      ele.classList.toggle('show-select');
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = window.innerWidth;
  }
}
