import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VestingProgressComponent } from './vesting-progress.component';

describe('VestingProgressComponent', () => {
  let component: VestingProgressComponent;
  let fixture: ComponentFixture<VestingProgressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VestingProgressComponent]
    });
    fixture = TestBed.createComponent(VestingProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
