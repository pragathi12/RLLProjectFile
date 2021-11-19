import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPendingOrderComponent } from './customer-pending-order.component';

describe('CustomerPendingOrderComponent', () => {
  let component: CustomerPendingOrderComponent;
  let fixture: ComponentFixture<CustomerPendingOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerPendingOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerPendingOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
