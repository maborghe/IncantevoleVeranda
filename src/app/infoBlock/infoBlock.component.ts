import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-infoBlock',
  templateUrl: './infoBlock.component.html',
  styleUrls: ['./infoBlock.component.css'],
  standalone: true,
})
export class InfoBlockComponent {
  @Input() title: string = '';
  @Input() text: string = '';
  @Input() imageSrc: string = '';
}
