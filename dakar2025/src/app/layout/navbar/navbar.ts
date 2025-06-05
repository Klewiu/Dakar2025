import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common'; // Import ViewportScroller

@Component({
  selector: 'app-navbar',
  // Pamiętaj o dodaniu ViewportScroller do imports, jeśli używasz standalone component (co sugeruje Angular 20)
  // W przeciwnym razie, jeśli to moduł, dodaj CommonModule do imports modułu
  imports: [], // Tutaj powinieneś mieć CommonModule, jeśli to moduł, lub po prostu jest to standalone i nie wymaga jawnego importu dla ViewportScroller
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller // Wstrzyknij ViewportScroller
  ) {}

  scrollTo(fragment: string) {
    // Jeśli nie jesteś na stronie home, przejdź do niej z fragmentem
    // Po nawigacji, lub jeśli jesteś już na stronie home, przewiń do kotwicy
    if (this.router.url !== '/home') {
      // Jeśli jesteś na innej stronie, nawiguj do home z fragmentem
      this.router.navigate(['/home'], { fragment: fragment }).then(() => {
        // Po nawigacji, przewiń do kotwicy.
        // Należy to zrobić w bloku .then() aby upewnić się, że DOM jest już gotowy.
        this.viewportScroller.scrollToAnchor(fragment);
      });
    } else {
      // Jeśli jesteś już na stronie home, po prostu przewiń do kotwicy
      this.viewportScroller.scrollToAnchor(fragment);
    }
  }
}
