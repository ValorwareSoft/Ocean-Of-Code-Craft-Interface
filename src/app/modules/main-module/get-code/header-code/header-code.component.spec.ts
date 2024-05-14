import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCodeComponent } from './header-code.component';

describe('HeaderCodeComponent', () => {
  let component: HeaderCodeComponent;
  let fixture: ComponentFixture<HeaderCodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HeaderCodeComponent]
    });
    fixture = TestBed.createComponent(HeaderCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
