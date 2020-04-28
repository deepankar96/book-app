import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReadingHistoryPageComponent } from './user-reading-history-page.component';

describe('UserReadingHistoryPageComponent', () => {
  let component: UserReadingHistoryPageComponent;
  let fixture: ComponentFixture<UserReadingHistoryPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserReadingHistoryPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserReadingHistoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
