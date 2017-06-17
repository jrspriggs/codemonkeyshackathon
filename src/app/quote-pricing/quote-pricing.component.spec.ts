import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotePricingComponent } from './quote-pricing.component';

describe('QuotePricingComponent', () => {
  let component: QuotePricingComponent;
  let fixture: ComponentFixture<QuotePricingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotePricingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotePricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
