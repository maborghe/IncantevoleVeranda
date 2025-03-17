import { Component, Input } from '@angular/core';
import { SlideshowImage } from './slideshow-image';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css'],
  standalone: true,
})
export class SlideshowComponent {

  @Input() title: string = "";
  @Input() images: SlideshowImage[] = [];

  currentIndex = 0;

  prevImage() {
    this.currentIndex = (this.currentIndex === 0) ? this.images.length - 1 : this.currentIndex - 1;
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }
}