import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadItemImageComponent } from './upload-item-image.component';

describe('UploadItemImageComponent', () => {
  let component: UploadItemImageComponent;
  let fixture: ComponentFixture<UploadItemImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadItemImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadItemImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
