import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnesssearchComponent } from './fitnesssearch.component';

describe('FitnesssearchComponent', () => {
  let component: FitnesssearchComponent;
  let fixture: ComponentFixture<FitnesssearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitnesssearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FitnesssearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
