import {Component} from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-photoGallery',
  templateUrl: './photoGallery.component.html',
  styleUrls: ['./photoGallery.component.css'],
  imports: [NgFor],
  standalone: true,
})
export class PhotoGalleryComponent {
  images: string[] = [
    'assets/BajaSardiniaSito/BagnoInterno/_MG_7932.JPG',
    'assets/BajaSardiniaSito/BagnoInterno/_MG_7937.JPG',
    'assets/BajaSardiniaSito/BagnoNonno/_MG_7927.JPG',
    'assets/BajaSardiniaSito/BagnoNonno/_MG_7930.JPG',
  ];

}

