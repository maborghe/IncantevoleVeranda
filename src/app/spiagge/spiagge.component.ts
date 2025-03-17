import {Component} from '@angular/core';
import { SlideshowComponent } from '../slideshow/slideshow.component';
import { SlideshowImage } from '../slideshow/slideshow-image';

@Component({
  selector: 'app-spiagge',
  templateUrl: './spiagge.component.html',
  styleUrls: ['./spiagge.component.css'],
  imports: [ SlideshowComponent ],
  standalone: true,
})
export class SpiaggeComponent {
  vicinanzeItems = {
    title: "Nelle vicinanze",
    images: [
      new SlideshowImage('assets/spiagge/tre-monti.jpg', 'Tre monti', '750m', '10min 🚶'),
      new SlideshowImage('assets/spiagge/battistoni.jpg', 'Cala Battistoni', '850m', '12min 🚗'),
      new SlideshowImage('assets/spiagge/cala-bitta.jpg', 'Cala Bitta', '3km', '6min 🚶'),
    ]
  }

}
