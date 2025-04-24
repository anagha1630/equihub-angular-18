// esop-dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { EquityService, EquityData } from '../../services/equity.service';

@Component({
  selector: 'app-esop-dashboard',
  templateUrl: './esop-dashboard.component.html',
  styleUrls: ['./esop-dashboard.component.scss']
})
export class EsopDashboardComponent implements OnInit {
  equityData: any;
  loading = true;
  error = false;

  constructor(private equityService: EquityService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.equityService.getEsopData().subscribe({
      next: (data) => {
        this.equityData = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading equity data:', err);
        this.error = true;
        this.loading = false;
      }
    });
  }
}