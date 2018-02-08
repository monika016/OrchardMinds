import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusMindsPageComponent } from './campus-minds-page.component';

describe('CampusMindsPageComponent', () => {
  let component: CampusMindsPageComponent;
  let fixture: ComponentFixture<CampusMindsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampusMindsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampusMindsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
