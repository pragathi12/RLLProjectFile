import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSearchDashComponent } from './customer-search-dash.component';

describe('CustomerSearchDashComponent', () => {
  let component: CustomerSearchDashComponent;
  let fixture: ComponentFixture<CustomerSearchDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerSearchDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSearchDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
