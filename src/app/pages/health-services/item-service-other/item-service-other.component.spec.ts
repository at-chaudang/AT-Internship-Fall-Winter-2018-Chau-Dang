import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemServiceOtherComponent } from './item-service-other.component';

describe('ItemServiceOtherComponent', () => {
  let component: ItemServiceOtherComponent;
  let fixture: ComponentFixture<ItemServiceOtherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemServiceOtherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemServiceOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
