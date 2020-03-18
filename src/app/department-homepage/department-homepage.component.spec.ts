import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentHomepageComponent } from './department-homepage.component';

describe('DepartmentHomepageComponent', () => {
  let component: DepartmentHomepageComponent;
  let fixture: ComponentFixture<DepartmentHomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentHomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
