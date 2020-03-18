import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributorHomepageComponent } from './contributor-homepage.component';

describe('ContributorHomepageComponent', () => {
  let component: ContributorHomepageComponent;
  let fixture: ComponentFixture<ContributorHomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContributorHomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributorHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
