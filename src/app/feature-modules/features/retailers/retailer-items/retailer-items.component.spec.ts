import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerItemsComponent } from './retailer-items.component';

describe('RetailerItemsComponent', () => {
  let component: RetailerItemsComponent;
  let fixture: ComponentFixture<RetailerItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailerItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailerItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
