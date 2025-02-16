import {Component} from '@angular/core';
import { PhotoGalleryComponent } from '../photoGallery/photoGallery.component';

@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.css'],
  imports: [ PhotoGalleryComponent ],
  standalone: true,
})
export class FotoComponent {


}
