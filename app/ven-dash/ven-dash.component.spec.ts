import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenDashComponent } from './ven-dash.component';

describe('VenDashComponent', () => {
  let component: VenDashComponent;
  let fixture: ComponentFixture<VenDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
