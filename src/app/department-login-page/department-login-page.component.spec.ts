import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentLoginPageComponent } from './department-login-page.component';

describe('DepartmentLoginPageComponent', () => {
  let component: DepartmentLoginPageComponent;
  let fixture: ComponentFixture<DepartmentLoginPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentLoginPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
