import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGenreSuperadminComponent } from './add-genre-superadmin.component';

describe('AddGenreSuperadminComponent', () => {
  let component: AddGenreSuperadminComponent;
  let fixture: ComponentFixture<AddGenreSuperadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGenreSuperadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGenreSuperadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
