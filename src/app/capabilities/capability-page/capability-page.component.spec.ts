import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapabilityPageComponent } from './capability-page.component';

describe('CapabilityPageComponent', () => {
  let component: CapabilityPageComponent;
  let fixture: ComponentFixture<CapabilityPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapabilityPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapabilityPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
