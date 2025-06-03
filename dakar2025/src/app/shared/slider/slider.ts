import { Component, AfterViewInit } from '@angular/core';
import Splide from '@splidejs/splide';

@Component({
  selector: 'app-slider',
  standalone: true,
  templateUrl: './slider.html',
  styleUrls: ['./slider.css']
})
export class Slider implements AfterViewInit {
  ngAfterViewInit() {
    new Splide('.splide', {
      type: 'loop',
      perPage: 3,
      padding: '2rem',
      gap: '1rem',
      breakpoints: {
        768: {
          perPage: 1,
          padding: '1rem'
        }
      }
    }).mount();
  }
}