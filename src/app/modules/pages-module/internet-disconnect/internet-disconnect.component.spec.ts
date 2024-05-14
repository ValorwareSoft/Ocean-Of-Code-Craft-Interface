import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternetDisconnectComponent } from './internet-disconnect.component';

describe('InternetDisconnectComponent', () => {
  let component: InternetDisconnectComponent;
  let fixture: ComponentFixture<InternetDisconnectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [InternetDisconnectComponent]
    });
    fixture = TestBed.createComponent(InternetDisconnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
