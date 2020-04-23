import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDisplaySuperAdminComponent } from './book-display-super-admin.component';

describe('BookDisplaySuperAdminComponent', () => {
  let component: BookDisplaySuperAdminComponent;
  let fixture: ComponentFixture<BookDisplaySuperAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookDisplaySuperAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDisplaySuperAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
