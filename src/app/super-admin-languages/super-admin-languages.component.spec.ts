import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminLanguagesComponent } from './super-admin-languages.component';

describe('SuperAdminLanguagesComponent', () => {
  let component: SuperAdminLanguagesComponent;
  let fixture: ComponentFixture<SuperAdminLanguagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperAdminLanguagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperAdminLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
