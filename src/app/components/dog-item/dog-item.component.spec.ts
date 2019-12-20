import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogItemComponent } from './dog-item.component';

describe('DogItemComponent', () => {
  let component: DogItemComponent;
  let fixture: ComponentFixture<DogItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
