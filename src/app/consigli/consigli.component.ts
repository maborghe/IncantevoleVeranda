import {Component} from '@angular/core';
import { RoutingGridComponent } from '../routingGrid/routingGrid.component';
import {
  BAJA_SARDINIA_ROUTE,
  SPIAGGE_ROUTE,
  COSA_FARE_ROUTE
} from '../app.routes';

@Component({
  selector: 'app-consigli',
  templateUrl: './consigli.component.html',
  styleUrls: ['./consigli.component.css'],
  imports: [ RoutingGridComponent ],
  standalone: true,
})
export class ConsigliComponent {
  cardItems = [
    { imageSrc: 'assets/consigli/spiagge.jpg', title: 'Spiagge', route: SPIAGGE_ROUTE },
    //{ imageSrc: 'assets/consigli/dove-mangiare.jpg', title: 'Dove mangiare', route: '/baja-sardinia' },
    { imageSrc: 'assets/consigli/faro_lamaddalena.jpg', title: 'Cosa fare', route: COSA_FARE_ROUTE },
    { imageSrc: 'assets/consigli/statua-vele.jpg', title: 'Baja Sardinia', route: BAJA_SARDINIA_ROUTE },
    //{ imageSrc: 'assets/consigli/come-arrivare.jpg', title: 'Come arrivare', route: '/baja-sardinia' },
  ];

}
