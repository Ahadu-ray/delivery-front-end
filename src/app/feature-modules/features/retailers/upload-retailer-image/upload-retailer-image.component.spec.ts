import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadRetailerImageComponent } from './upload-retailer-image.component';

describe('UploadRetailerImageComponent', () => {
  let component: UploadRetailerImageComponent;
  let fixture: ComponentFixture<UploadRetailerImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadRetailerImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadRetailerImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
