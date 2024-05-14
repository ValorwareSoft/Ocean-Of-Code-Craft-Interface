import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarCodeComponent } from './navbar-code.component';

describe('NavbarCodeComponent', () => {
  let component: NavbarCodeComponent;
  let fixture: ComponentFixture<NavbarCodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NavbarCodeComponent]
    });
    fixture = TestBed.createComponent(NavbarCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
