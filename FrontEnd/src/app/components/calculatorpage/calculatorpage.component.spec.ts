import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorpageComponent } from './calculatorpage.component';

describe('CalculatorpageComponent', () => {
  let component: CalculatorpageComponent;
  let fixture: ComponentFixture<CalculatorpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatorpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
