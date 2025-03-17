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
  nelleVicinanze = {
    title: "Nelle vicinanze",
    images: [
      new SlideshowImage('assets/spiagge/tre-monti.jpg', 'Tre monti', '750m', '10min 🚶'),
      new SlideshowImage('assets/spiagge/battistoni.jpg', 'Cala Battistoni', '850m', '12min 🚗'),
      new SlideshowImage('assets/spiagge/cala-bitta.jpg', 'Cala Bitta', '3km', '6min 🚶'),
    ]
  }

  dogBeaches = {
    title: "Dog beaches",
    images: [
      new SlideshowImage('assets/spiagge/lapitrizza.png', 'La Pitrizza', '6km', '8min 🚗'),
      new SlideshowImage('assets/spiagge/lupostu.jpg', 'Lu Postu', '8km', '10min 🚗'),
      new SlideshowImage('assets/spiagge/sciumara.png', 'La Sciumara', '12km', '15min 🚗'),
    ]
  }

  costaSmeralda = {
    title: "Costa Smeralda",
    images: [
      new SlideshowImage('assets/spiagge/pevero.jpg', 'Pevero', '9km', '13min 🚗'),
      new SlideshowImage('assets/spiagge/capriccioli.jpg', 'Capriccioli', '15km', '19min 🚗'),
      new SlideshowImage('assets/spiagge/principe.jpg', 'Spiaggia del principe', '16km', '22min 🚗'),
      new SlideshowImage('assets/spiagge/romazzino.jpg', 'Romazzino', '16km', '22min 🚗'),
    ]
  }

}
