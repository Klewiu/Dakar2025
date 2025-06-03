import { Component } from '@angular/core';
import { Navbar } from "../../layout/navbar/navbar";
import { Footer } from "../../layout/footer/footer";
import { Slider } from '../../shared/slider/slider';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Navbar, Footer, Slider],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComoponent {

}
