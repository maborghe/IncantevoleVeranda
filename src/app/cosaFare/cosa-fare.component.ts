import {Component} from '@angular/core';
import { RoutingGridComponent } from '../routingGrid/routingGrid.component';
import {
  PAESI_ROUTE,
  NATURA_ROUTE,
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
    { imageSrc: 'assets/cosaFare/san-pantaleo.jpg', title: 'Cosa vedere', route: PAESI_ROUTE },
    { imageSrc: 'assets/cosaFare/bike.jpg', title: "Attività all'aperto", route: NATURA_ROUTE },
    { imageSrc: 'assets/cosaFare/laprisgiona.jpg', title: 'Archeologia', route: ARCHEOLOGIA_ROUTE },
  ];
}
