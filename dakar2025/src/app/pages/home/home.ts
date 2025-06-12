import { Component, AfterViewInit, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Navbar } from "../../layout/navbar/navbar";
import { Footer } from "../../layout/footer/footer";
import { Slider } from '../../shared/slider/slider';
// @ts-ignore – jeśli masz błąd braku typów
import * as AOS from 'aos';
import 'aos/dist/aos.css'; // Upewnij się, że styl AOS jest zaimportowany

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Navbar, Footer, Slider],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComoponent implements OnInit, AfterViewInit { // <-- literówka w nazwie klasy
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    AOS.init({
      duration: 1500,
      once: false,
    });
  }

ngAfterViewInit(): void {
  this.route.fragment.subscribe(fragment => {
    if (fragment) {
      setTimeout(() => {
        const el = document.getElementById(fragment);
        if (el) {
          const yOffset = -120; // przesunięcie w górę o 100px
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    }
  });
}
}
