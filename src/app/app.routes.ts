import {Routes} from '@angular/router';
import {PageNotFoundComponent} from './app.helper';
import {HomeComponent} from './home/home.component';
import {CasaComponent} from './casa/casa.component';
import {FotoComponent} from './foto/foto.component';
import { ConsigliComponent } from './consigli/consigli.component';
import { BajaSardiniaComponent } from './bajaSardinia/bajaSardinia.component';
import { SpiaggeComponent } from './spiagge/spiagge.component';
import { CosaFareComponent } from './cosaFare/cosa-fare.component';
import { DivertimentoComponent } from './divertimento/divertimento.component';
import { PaesiComponent } from './paesi/paesi.component';
import { NaturaComponent } from './natura/natura.component';
import { ArcheologiaComponent } from './archeologia/archeologia.component';

export const BAJA_SARDINIA_ROUTE = 'baja-sardinia'
export const SPIAGGE_ROUTE = 'spiagge'
export const COSA_FARE_ROUTE = 'cosa-fare'
export const DIVERTIMENTO_ROUTE = 'divertimento'
export const PAESI_ROUTE = 'paesi'
export const NATURA_ROUTE = 'natura'
export const ARCHEOLOGIA_ROUTE = 'archeologia'

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'casa', component: CasaComponent },
  { path: 'foto', component: FotoComponent },
  { path: 'consigli', component: ConsigliComponent },
  { path: BAJA_SARDINIA_ROUTE, component: BajaSardiniaComponent },
  { path: SPIAGGE_ROUTE, component: SpiaggeComponent },
  { path: COSA_FARE_ROUTE, component: CosaFareComponent },
  { path: DIVERTIMENTO_ROUTE, component: DivertimentoComponent },
  { path: PAESI_ROUTE, component: PaesiComponent },
  { path: NATURA_ROUTE, component: NaturaComponent },
  { path: ARCHEOLOGIA_ROUTE, component: ArcheologiaComponent },
  { path: '**', component: PageNotFoundComponent }
];

