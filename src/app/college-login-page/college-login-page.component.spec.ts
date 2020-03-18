import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeLoginPageComponent } from './college-login-page.component';

describe('CollegeLoginPageComponent', () => {
  let component: CollegeLoginPageComponent;
  let fixture: ComponentFixture<CollegeLoginPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegeLoginPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegeLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
