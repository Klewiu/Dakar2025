import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import Splide from '@splidejs/splide';

@Component({
  selector: 'app-slider',
  standalone: true,
  templateUrl: './slider.html',
  styleUrls: ['./slider.css']
})
export class Slider implements AfterViewInit {
  @ViewChild('splide') splideElem!: ElementRef;
    ngAfterViewInit() {
      new Splide('.splide', {
        type: 'loop',
        perPage: 2,
        padding: '9rem',
        gap: '0.2rem',
        autoplay: true,       // automatyczne przewijanie
        interval: 5000, 
        breakpoints: {
          768: {
            perPage: 1,
            padding: '0rem',
          }
        }
     }).mount();
  }
}