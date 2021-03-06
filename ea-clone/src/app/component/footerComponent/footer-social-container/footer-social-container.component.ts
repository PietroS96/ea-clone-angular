import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-social-container',
  templateUrl: './footer-social-container.component.html',
  styleUrls: ['./footer-social-container.component.css'],
})
export class FooterSocialContainerComponent implements OnInit {
  constructor() {}

  innerWidth: any;

  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
  }
}
