import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';
import Pet from 'src/app/models/Pet';
import Cat from 'src/app/models/Cat';
import Dog from 'src/app/models/Dog';
import { CatItemComponent } from '../cat-item/cat-item.component';
import { DogItemComponent } from '../dog-item/dog-item.component';

@Component({
  selector: 'app-member-item-container',
  templateUrl: './member-item-container.component.html',
  styleUrls: ['./member-item-container.component.scss']
})
export class MemberItemComponent implements OnInit {
  @Input() member: Pet;

  constructor(
    private viewContainerRef: ViewContainerRef,
  ) { }

  ngOnInit(): void {
    this.viewContainerRef.clear();
    const cat = this.member as Cat;
    const dog = this.member as Dog;
    if (cat.favoriteComfyPlace) {
      const componentRef = this.viewContainerRef.createComponent(CatItemComponent);
      componentRef.instance.member = cat;
    } else if (dog.favoritePark) {
      const componentRef = this.viewContainerRef.createComponent(DogItemComponent);
      componentRef.instance.member = dog;
    }
  }
}
