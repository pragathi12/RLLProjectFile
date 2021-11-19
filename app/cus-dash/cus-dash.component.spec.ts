import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusDashComponent } from './cus-dash.component';

describe('CusDashComponent', () => {
  let component: CusDashComponent;
  let fixture: ComponentFixture<CusDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CusDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CusDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
