import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VestingScheduleComponent } from './vesting-schedule.component';

describe('VestingScheduleComponent', () => {
  let component: VestingScheduleComponent;
  let fixture: ComponentFixture<VestingScheduleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VestingScheduleComponent]
    });
    fixture = TestBed.createComponent(VestingScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
