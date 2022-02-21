import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutpostComponent } from './workoutpost.component';

describe('WorkoutpostComponent', () => {
  let component: WorkoutpostComponent;
  let fixture: ComponentFixture<WorkoutpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkoutpostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
