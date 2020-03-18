import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributorLoginComponent } from './contributor-login.component';

describe('ContributorLoginComponent', () => {
  let component: ContributorLoginComponent;
  let fixture: ComponentFixture<ContributorLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContributorLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributorLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
