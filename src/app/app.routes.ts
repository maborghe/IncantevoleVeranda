import {Routes} from '@angular/router';
import {PageNotFoundComponent} from './app.helper';
import {HomeComponent} from './home/home.component';
import {CasaComponent} from './casa/casa.component';
import {FotoComponent} from './foto/foto.component';
import { ConsigliComponent } from './consigli/consigli.component';
import { BajaSardiniaComponent } from './bajaSardinia/bajaSardinia.component';
import { SpiaggeComponent } from './spiagge/spiagge.component';

const BAJA_SARDINIA_ROUTE = 'baja-sardinia'
const SPIAGGE_ROUTE = 'spiagge'

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'casa', component: CasaComponent },
  { path: 'foto', component: FotoComponent },
  { path: 'consigli', component: ConsigliComponent },
  { path: BAJA_SARDINIA_ROUTE, component: BajaSardiniaComponent },
  { path: SPIAGGE_ROUTE, component: SpiaggeComponent },
  { path: '**', component: PageNotFoundComponent }
];
