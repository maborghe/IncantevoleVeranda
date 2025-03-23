import {Component} from '@angular/core';
import { InfoBlockComponent } from '../infoBlock/infoBlock.component'

@Component({
  selector: 'app-paesi',
  templateUrl: './paesi.component.html',
  styleUrls: ['./paesi.component.css'],
  imports: [ InfoBlockComponent ],
  standalone: true,
})
export class PaesiComponent {


}
