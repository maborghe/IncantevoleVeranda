import {Component, Input} from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-routingGrid',
  templateUrl: './routingGrid.component.html',
  styleUrls: ['./routingGrid.component.css'],
  imports: [NgFor],
  standalone: true,
})
export class RoutingGridComponent {
  @Input() items: { imageSrc: string; title: string }[] = [];

}

