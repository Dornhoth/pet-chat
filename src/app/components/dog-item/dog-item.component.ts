import { Component, Input } from '@angular/core';
import Dog from 'src/app/models/Dog';

@Component({
  selector: 'app-dog-item',
  templateUrl: './dog-item.component.html',
  styleUrls: ['./dog-item.component.scss']
})
export class DogItemComponent {
  @Input() member: Dog;

  constructor() { }
}
