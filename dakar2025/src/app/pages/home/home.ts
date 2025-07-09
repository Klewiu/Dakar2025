import { Component, AfterViewInit, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Navbar } from "../../layout/navbar/navbar";
import { Footer } from "../../layout/footer/footer";
import { Slider } from '../../shared/slider/slider';
// @ts-ignore – jeśli masz błąd braku typów
import * as AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Navbar, Footer, Slider],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit, AfterViewInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Usuń fragment (#anchor) z URL
    const currentUrl = window.location.href;
    if (currentUrl.includes('#')) {
      const cleanUrl = currentUrl.split('#')[0];
      window.history.replaceState(null, '', cleanUrl);
    }
  }

  ngAfterViewInit(): void {
    // Scroll na górę
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });

    // Inicjalizacja AOS
    AOS.init({ 
      duration: 1200, 
      once: false
     });

    setTimeout(() => {
      AOS.refreshHard();
    }, 100);
  }
}
