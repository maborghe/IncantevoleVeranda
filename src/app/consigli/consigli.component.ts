import {Component} from '@angular/core';
import { RoutingGridComponent } from '../routingGrid/routingGrid.component';

@Component({
  selector: 'app-consigli',
  templateUrl: './consigli.component.html',
  styleUrls: ['./consigli.component.css'],
  imports: [ RoutingGridComponent ],
  standalone: true,
})
export class ConsigliComponent {
  cardItems = [
    { imageSrc: 'assets/consigli/statua-vele.jpg', title: 'Baja Sardinia', route: '/baja-sardinia' },
    { imageSrc: 'assets/consigli/spiagge.jpg', title: 'Spiagge', route: '/spiagge' },
    { imageSrc: 'assets/consigli/dove-mangiare.jpg', title: 'Dove mangiare', route: '/baja-sardinia' },
    { imageSrc: 'assets/consigli/cosa-fare.jpg', title: 'Cosa fare', route: '/baja-sardinia' },
    { imageSrc: 'assets/consigli/come-arrivare.jpg', title: 'Come arrivare', route: '/baja-sardinia' },
  ];

}
