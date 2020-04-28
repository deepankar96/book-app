import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminUserHistoryPageComponent } from './super-admin-user-history-page.component';

describe('SuperAdminUserHistoryPageComponent', () => {
  let component: SuperAdminUserHistoryPageComponent;
  let fixture: ComponentFixture<SuperAdminUserHistoryPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperAdminUserHistoryPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperAdminUserHistoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
