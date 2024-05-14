import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCustomCodeComponent } from './get-custom-code.component';

describe('GetCustomCodeComponent', () => {
  let component: GetCustomCodeComponent;
  let fixture: ComponentFixture<GetCustomCodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [GetCustomCodeComponent]
    });
    fixture = TestBed.createComponent(GetCustomCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
