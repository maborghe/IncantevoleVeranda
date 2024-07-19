import {Component} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {RouterOutlet, RouterLink} from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatToolbarModule, RouterOutlet, RouterLink],
  //imports: [MatToolbarModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'default';
}
