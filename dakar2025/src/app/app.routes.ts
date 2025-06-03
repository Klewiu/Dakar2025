import { Routes } from '@angular/router';
import { HomeComoponent } from './pages/home/home'

export const routes: Routes = [
 { path: '', component: HomeComoponent },
 { path: '**', redirectTo: '' }   
];
