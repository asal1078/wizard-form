import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdStepTableComponent } from './third-step-table.component';

describe('ThirdStepTableComponent', () => {
  let component: ThirdStepTableComponent;
  let fixture: ComponentFixture<ThirdStepTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdStepTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirdStepTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
