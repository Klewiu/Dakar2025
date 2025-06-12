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
      once: false, // animacje tylko raz przy wejściu
    });
  }

  ngAfterViewInit(): void {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        const el = document.getElementById(fragment);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  }
}
