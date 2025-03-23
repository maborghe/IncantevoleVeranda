import {Component} from '@angular/core';
import { RoutingGridComponent } from '../routingGrid/routingGrid.component';
import {
  DIVERTIMENTO_ROUTE,
  PAESI_ROUTE,
  ATTIVITA_ROUTE,
  ARCHEOLOGIA_ROUTE
} from '../app.routes';

@Component({
  selector: 'app-cosaFare',
  templateUrl: './cosa-fare.component.html',
  styleUrls: ['./cosa-fare.component.css'],
  imports: [ RoutingGridComponent ],
  standalone: true,
})
export class CosaFareComponent {
  cardItems = [
    { imageSrc: 'assets/cosaFare/phi_beach.png', title: 'Divertimento', route: DIVERTIMENTO_ROUTE },
    { imageSrc: 'assets/cosaFare/san-pantaleo.jpg', title: 'Paesi e territorio', route: PAESI_ROUTE },
    { imageSrc: 'assets/cosaFare/faro_lamaddalena.jpg', title: "Attività all'aperto", route: ATTIVITA_ROUTE },
    { imageSrc: 'assets/cosaFare/laprisgiona.jpg', title: 'Archeologia', route: ARCHEOLOGIA_ROUTE },
  ];
}
