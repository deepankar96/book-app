import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminLoginPageComponent } from './super-admin-login-page.component';

describe('SuperAdminLoginPageComponent', () => {
  let component: SuperAdminLoginPageComponent;
  let fixture: ComponentFixture<SuperAdminLoginPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperAdminLoginPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperAdminLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
