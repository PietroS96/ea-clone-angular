import {
  Component,
  ElementRef,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-footer-language-container',
  templateUrl: './footer-language-container.component.html',
  styleUrls: ['./footer-language-container.component.css'],
})
export class FooterLanguageContainerComponent implements OnInit {
  visibility: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  rotateArrow(ele: HTMLElement) {
    ele.classList.toggle('rotate-arrow');
  }
  cancelBorder(ele: HTMLElement) {
    ele.classList.toggle('change-border');
  }
  showPanel() {
    this.visibility = !this.visibility;
  }
}
