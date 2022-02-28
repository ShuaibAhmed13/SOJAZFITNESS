import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutequipmentComponent } from './workoutequipment.component';

describe('WorkoutequipmentComponent', () => {
  let component: WorkoutequipmentComponent;
  let fixture: ComponentFixture<WorkoutequipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkoutequipmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutequipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
