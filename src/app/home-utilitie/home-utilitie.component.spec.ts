import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeUtilitieComponent } from './home-utilitie.component';

describe('HomeUtilitieComponent', () => {
  let component: HomeUtilitieComponent;
  let fixture: ComponentFixture<HomeUtilitieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeUtilitieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeUtilitieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
