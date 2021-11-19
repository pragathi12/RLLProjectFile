import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerOrderssComponent } from './customer-orderss.component';

describe('CustomerOrderssComponent', () => {
  let component: CustomerOrderssComponent;
  let fixture: ComponentFixture<CustomerOrderssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerOrderssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerOrderssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
