import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapabilityCardComponent } from './capability-card.component';

describe('CapabilityCardComponent', () => {
  let component: CapabilityCardComponent;
  let fixture: ComponentFixture<CapabilityCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapabilityCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapabilityCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
