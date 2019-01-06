import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavMeniuComponent } from './side-nav-meniu.component';

describe('SideNavMeniuComponent', () => {
  let component: SideNavMeniuComponent;
  let fixture: ComponentFixture<SideNavMeniuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNavMeniuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavMeniuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
