import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutmanualComponent } from './workoutmanual.component';

describe('WorkoutmanualComponent', () => {
  let component: WorkoutmanualComponent;
  let fixture: ComponentFixture<WorkoutmanualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkoutmanualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutmanualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
