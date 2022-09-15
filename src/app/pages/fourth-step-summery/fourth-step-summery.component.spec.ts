import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthStepSummeryComponent } from './fourth-step-summery.component';

describe('FourthStepSummeryComponent', () => {
  let component: FourthStepSummeryComponent;
  let fixture: ComponentFixture<FourthStepSummeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourthStepSummeryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FourthStepSummeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
