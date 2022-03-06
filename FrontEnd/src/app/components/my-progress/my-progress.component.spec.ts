import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProgressComponent } from './my-progress.component';

describe('MyProgressComponent', () => {
  let component: MyProgressComponent;
  let fixture: ComponentFixture<MyProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyProgressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
