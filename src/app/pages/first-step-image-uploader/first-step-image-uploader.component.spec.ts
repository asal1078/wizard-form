import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstStepImageUploaderComponent } from './first-step-image-uploader.component';

describe('FirstStepImageUploaderComponent', () => {
  let component: FirstStepImageUploaderComponent;
  let fixture: ComponentFixture<FirstStepImageUploaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstStepImageUploaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstStepImageUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
