
// vesting-schedule.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TabService } from '../../services/tab.service';

interface VestingItem {
  slNo: number;
  symbol: string;
  type: string;
  awardPrice: number;
  granted: number;
  exercisable: number;
  finalExerciseDate: string;
  unvestedMarketValue: number;
  exercisableMarketValue: number;
}

@Component({
  selector: 'app-vesting-schedule',
  templateUrl: './vesting-schedule.component.html',
  styleUrls: ['./vesting-schedule.component.scss']
})
export class VestingScheduleComponent implements OnInit {
  vestingData: VestingItem[] = [
    { 
      slNo: 1, 
      symbol: 'IBM', 
      type: 'RSU', 
      awardPrice: 10, 
      granted: 100, 
      exercisable: 25, 
      finalExerciseDate: '21/06/2025', 
      unvestedMarketValue: 75, 
      exercisableMarketValue: 250 
    },
    { 
      slNo: 2, 
      symbol: 'IBM', 
      type: 'RSU', 
      awardPrice: 10, 
      granted: 100, 
      exercisable: 6, 
      finalExerciseDate: '21/06/2026', 
      unvestedMarketValue: 69, 
      exercisableMarketValue: 60 
    },
    { 
      slNo: 3, 
      symbol: 'IBM', 
      type: 'ESOP', 
      awardPrice: 10, 
      granted: 100, 
      exercisable: 6, 
      finalExerciseDate: '21/06/2027', 
      unvestedMarketValue: 63, 
      exercisableMarketValue: 60 
    },
    { 
      slNo: 4, 
      symbol: 'IBM', 
      type: 'ESOP', 
      awardPrice: 10, 
      granted: 100, 
      exercisable: 6, 
      finalExerciseDate: '21/06/2028', 
      unvestedMarketValue: 57, 
      exercisableMarketValue: 60 
    },
    { 
      slNo: 5, 
      symbol: 'IBM', 
      type: 'ESOP', 
      awardPrice: 10, 
      granted: 100, 
      exercisable: 7, 
      finalExerciseDate: '21/06/2029', 
      unvestedMarketValue: 50, 
      exercisableMarketValue: 70 
    },
    { 
      slNo: 6, 
      symbol: 'IBM', 
      type: 'RSU', 
      awardPrice: 12, 
      granted: 120, 
      exercisable: 40, 
      finalExerciseDate: '01/01/2026', 
      unvestedMarketValue: 80, 
      exercisableMarketValue: 300 
    },
    { 
      slNo: 7, 
      symbol: 'IBM', 
      type: 'RSU', 
      awardPrice: 15, 
      granted: 90, 
      exercisable: 20, 
      finalExerciseDate: '15/03/2027', 
      unvestedMarketValue: 70, 
      exercisableMarketValue: 200 
    },
    { 
      slNo: 8, 
      symbol: 'IBM', 
      type: 'ESOP', 
      awardPrice: 9, 
      granted: 110, 
      exercisable: 10, 
      finalExerciseDate: '11/11/2028', 
      unvestedMarketValue: 60, 
      exercisableMarketValue: 90 
    },
    { 
      slNo: 9, 
      symbol: 'IBM', 
      type: 'RSU', 
      awardPrice: 13, 
      granted: 80, 
      exercisable: 15, 
      finalExerciseDate: '30/09/2026', 
      unvestedMarketValue: 55, 
      exercisableMarketValue: 150 
    },
    { 
      slNo: 10, 
      symbol: 'IBM', 
      type: 'ESOP', 
      awardPrice: 11, 
      granted: 100, 
      exercisable: 8, 
      finalExerciseDate: '10/10/2029', 
      unvestedMarketValue: 65, 
      exercisableMarketValue: 95 
    }
  ];
  

  tooltips = {
    slNo: 'Serial Number of the vesting item',
    symbol: 'Stock symbol identifier',
    type: 'Type of equity compensation',
    awardPrice: 'The price at which the equity was granted',
    granted: 'Number of shares granted',
    exercisable: 'Number of shares that can be exercised',
    finalExerciseDate: 'Last date to exercise the options',
    unvestedMarketValue: 'Current market value of unvested shares',
    exercisableMarketValue: 'Current market value of exercisable shares'
  };
  //tabService: any;

  constructor(
    private router: Router,
    private tabService: TabService
  ) { }

  ngOnInit(): void {
  }

  navigateTo(type: string): void {
    console.log(`Navigating to type: ${type}`); // Add this for debugging
    
    // First set the active tab
    this.tabService.setActiveTab(type);
    
    // Add a small delay before navigation to ensure tab is set
    setTimeout(() => {
      if (type === 'RSU') {
        console.log('Navigating to RSU tab');
      } else if (type === 'ESOP') {
        console.log('Navigating to ESOP tab');
      }
    }, 100);
  }

  showTooltip(tooltip: string): void {
    console.log(`Showing tooltip: ${tooltip}`);
  }
}