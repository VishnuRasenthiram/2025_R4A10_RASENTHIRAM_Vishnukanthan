import { Routes } from '@angular/router';
import {DetailTravelComponent} from "./travels/detail-travel/detail-travel.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {GenerateTravelComponent} from './generate-travel/generate-travel.component';
import {HomeComponent} from './home/home.component';
export const routes: Routes = [
  {
    component: HomeComponent,
    path: 'home',
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    component: GenerateTravelComponent,
    path: 'home/generate',
  },
  {
    component: DetailTravelComponent,
    path: 'home/voyage/:id',
  },
  {
    component: HomeComponent,
    path: 'home/page/:page',
  },
  {
    component: NotFoundComponent,
    path: '**',
  }
];

