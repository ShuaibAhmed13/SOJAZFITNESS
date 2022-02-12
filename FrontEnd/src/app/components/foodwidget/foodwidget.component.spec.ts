import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodwidgetComponent } from './foodwidget.component';

describe('FoodwidgetComponent', () => {
  let component: FoodwidgetComponent;
  let fixture: ComponentFixture<FoodwidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodwidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodwidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
