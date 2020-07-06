import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpWithOrderComponent } from './help-with-order.component';

describe('HelpWithOrderComponent', () => {
  let component: HelpWithOrderComponent;
  let fixture: ComponentFixture<HelpWithOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpWithOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpWithOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
