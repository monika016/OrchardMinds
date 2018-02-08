import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInMsgComponent } from './log-in-msg.component';

describe('LogInMsgComponent', () => {
  let component: LogInMsgComponent;
  let fixture: ComponentFixture<LogInMsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogInMsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogInMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
