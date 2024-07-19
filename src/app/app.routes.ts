import {Routes} from '@angular/router';
import {PageNotFoundComponent} from './app.helper';
import {HomeComponent} from './home/home.component';
import {CasaComponent} from './casa/casa.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'casa', component: CasaComponent },
  { path: '**', component: PageNotFoundComponent }
];
