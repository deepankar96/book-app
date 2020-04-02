import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookContentDisplayPageComponent } from './book-content-display-page.component';

describe('BookContentDisplayPageComponent', () => {
  let component: BookContentDisplayPageComponent;
  let fixture: ComponentFixture<BookContentDisplayPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookContentDisplayPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookContentDisplayPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
