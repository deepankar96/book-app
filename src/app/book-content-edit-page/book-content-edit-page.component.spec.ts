import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookContentEditPageComponent } from './book-content-edit-page.component';

describe('BookContentEditPageComponent', () => {
  let component: BookContentEditPageComponent;
  let fixture: ComponentFixture<BookContentEditPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookContentEditPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookContentEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
