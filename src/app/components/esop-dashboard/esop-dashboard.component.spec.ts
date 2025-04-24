import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsopDashboardComponent } from './esop-dashboard.component';

describe('EsopDashboardComponent', () => {
  let component: EsopDashboardComponent;
  let fixture: ComponentFixture<EsopDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EsopDashboardComponent]
    });
    fixture = TestBed.createComponent(EsopDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
