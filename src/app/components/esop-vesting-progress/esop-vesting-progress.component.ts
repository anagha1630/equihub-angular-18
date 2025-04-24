// esop-vesting-progress.component.ts
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-esop-vesting-progress',
  templateUrl: './esop-vesting-progress.component.html',
  styleUrls: ['./esop-vesting-progress.component.scss']
})
export class EsopVestingProgressComponent implements OnChanges {
  @Input() percentage: number = 0;
  @Input() nextDate: string = '';
  @Input() amountValue: number = 0;

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
      backgroundColor: ['#135e13', '#a5d6a7'], // Dark green and light green
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
        backgroundColor: ['#135e13', '#a5d6a7'], // Dark green and light green
        borderWidth: 0
      }
    ];
  }
}