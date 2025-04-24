import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-vesting-progress',
  templateUrl: './vesting-progress.component.html',
  styleUrls: ['./vesting-progress.component.scss']
})
export class VestingProgressComponent implements OnChanges {
  @Input() percentage: number = 0;
  @Input() nextDate: string = '';
  
  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: true,
    cutout: '75%',
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: false
      }
    }
  };
  
  public doughnutChartLabels: string[] = ['Vested', 'Unvested'];
  public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [
    {
      data: [25, 75],
      backgroundColor: ['#0b476b', '#157a76'],
      borderWidth: 0
    }
  ];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['percentage']) {
      this.updateChartData();
    }
  }
  
  updateChartData(): void {
    const remaining = 100 - this.percentage;
    this.doughnutChartDatasets = [
      {
        data: [this.percentage, remaining],
        backgroundColor: [ '#0b476b', 'white'], // Inner circle teal, outer ring dark cyan blue
        borderWidth: 0
      }
    ];
  }
}