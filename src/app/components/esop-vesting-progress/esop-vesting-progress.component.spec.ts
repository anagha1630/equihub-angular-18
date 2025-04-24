import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsopVestingProgressComponent } from './esop-vesting-progress.component';

describe('EsopVestingProgressComponent', () => {
  let component: EsopVestingProgressComponent;
  let fixture: ComponentFixture<EsopVestingProgressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EsopVestingProgressComponent]
    });
    fixture = TestBed.createComponent(EsopVestingProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
