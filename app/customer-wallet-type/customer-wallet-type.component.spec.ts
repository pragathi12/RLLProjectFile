import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerWalletTypeComponent } from './customer-wallet-type.component';

describe('CustomerWalletTypeComponent', () => {
  let component: CustomerWalletTypeComponent;
  let fixture: ComponentFixture<CustomerWalletTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerWalletTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerWalletTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
