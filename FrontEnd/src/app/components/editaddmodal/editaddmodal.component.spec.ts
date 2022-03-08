import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaddmodalComponent } from './editaddmodal.component';

describe('EditaddmodalComponent', () => {
  let component: EditaddmodalComponent;
  let fixture: ComponentFixture<EditaddmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditaddmodalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaddmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
