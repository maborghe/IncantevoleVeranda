import {Routes} from '@angular/router';
import {PageNotFoundComponent} from './app.helper';
import {HomeComponent} from './home/home.component';
import {CasaComponent} from './casa/casa.component';
import {FotoComponent} from './foto/foto.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'casa', component: CasaComponent },
  { path: 'foto', component: FotoComponent },
  { path: '**', component: PageNotFoundComponent }
];
