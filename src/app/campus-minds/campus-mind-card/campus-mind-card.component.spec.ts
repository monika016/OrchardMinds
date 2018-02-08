import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusMindCardComponent } from './campus-mind-card.component';

describe('CampusMindCardComponent', () => {
  let component: CampusMindCardComponent;
  let fixture: ComponentFixture<CampusMindCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampusMindCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampusMindCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
