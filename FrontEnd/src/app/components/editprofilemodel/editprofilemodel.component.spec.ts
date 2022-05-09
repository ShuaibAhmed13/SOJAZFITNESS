import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprofilemodelComponent } from './editprofilemodel.component';

describe('EditprofilemodelComponent', () => {
  let component: EditprofilemodelComponent;
  let fixture: ComponentFixture<EditprofilemodelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditprofilemodelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditprofilemodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
