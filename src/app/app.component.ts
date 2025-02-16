import {Component} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {RouterOutlet, RouterLink} from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatMenuModule, RouterOutlet, RouterLink ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'default';
}
