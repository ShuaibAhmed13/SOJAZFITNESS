import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayFoodNutritionComponent } from './display-food-nutrition.component';

describe('DisplayFoodNutritionComponent', () => {
  let component: DisplayFoodNutritionComponent;
  let fixture: ComponentFixture<DisplayFoodNutritionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayFoodNutritionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayFoodNutritionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
