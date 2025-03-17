import {Component, Input} from '@angular/core';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routingGrid',
  templateUrl: './routingGrid.component.html',
  styleUrls: ['./routingGrid.component.css'],
  imports: [NgFor],
  standalone: true,
})
export class RoutingGridComponent {
  @Input() items: { imageSrc: string; title: string, route: string }[] = [];

  constructor(private router: Router) {}

  navigateToPage(route: string) {
    console.log("Navigating to: " + route)
    this.router.navigate([route]);
  }
}

