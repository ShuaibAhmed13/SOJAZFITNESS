import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelTopComponent } from './panel-top.component';

describe('PanelTopComponent', () => {
  let component: PanelTopComponent;
  let fixture: ComponentFixture<PanelTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
