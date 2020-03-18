import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterHomePageComponent } from './master-home-page.component';

describe('MasterHomePageComponent', () => {
  let component: MasterHomePageComponent;
  let fixture: ComponentFixture<MasterHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
