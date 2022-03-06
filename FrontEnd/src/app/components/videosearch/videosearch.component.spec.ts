import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosearchComponent } from './videosearch.component';

describe('VideosearchComponent', () => {
  let component: VideosearchComponent;
  let fixture: ComponentFixture<VideosearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideosearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
