import { Component, Input } from '@angular/core';
import Cat from 'src/app/models/Cat';

@Component({
  selector: 'app-cat-item',
  templateUrl: './cat-item.component.html',
  styleUrls: ['./cat-item.component.scss']
})
export class CatItemComponent {
  @Input() member: Cat;

  constructor() { }
}
