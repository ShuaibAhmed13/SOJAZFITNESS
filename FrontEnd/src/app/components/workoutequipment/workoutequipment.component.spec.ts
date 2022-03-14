import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkaroundsComponent } from './workoutequipment.component';

describe('WorkoutequipmentComponent', () => {
  let component: WorkaroundsComponent;
  let fixture: ComponentFixture<WorkaroundsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkaroundsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkaroundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
