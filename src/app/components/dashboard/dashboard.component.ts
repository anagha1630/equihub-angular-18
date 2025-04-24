import { Component, OnInit } from '@angular/core';
import { EquityService, EquityData } from '../../services/equity.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  equityData: EquityData | null = null; //Holds RSU details fetched from a backend API
  loading = true;//True while data is being fetched.
  error = false;//True if fetching data fails

  constructor(private equityService: EquityService) {}

  ngOnInit(): void { // Angular lifecycle hook — triggers loadData() when the component loads.
    this.loadData();
  }

  loadData(): void { //Uses EquityService to get the data, and updates UI state based on success or failure.
    this.equityService.getEquityData().subscribe({
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
