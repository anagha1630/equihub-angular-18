// services/equity.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

export interface EquityData {
  username: string;
  stockPrice: number;
  totalStocksGranted: number;
  remainingUnvestedStocks: number;
  vestingPercentage: number;
  nextVestingDate: string;
  currentValue: number;
}

@Injectable({
  providedIn: 'root'
})
export class EquityService {
  // Removed duplicate getEsopData method to resolve the error.
  // For Sprint 1, we'll return static data
  // For Sprint 2, this will use HttpClient to fetch from JSON files
  
  constructor(private http: HttpClient) {}
  
  getEquityData(): Observable<EquityData> {
    // Static data for Sprint 1
    const staticData: EquityData = {
      username: 'Deepak Kalwal',
      stockPrice: 100,
      totalStocksGranted: 100,
      remainingUnvestedStocks: 75,
      vestingPercentage: 45,
      nextVestingDate: 'Aug 30,2025',
      currentValue: 2500
    };
    
    return of(staticData);
    
    // For Sprint 2, uncomment this to fetch from JSON:
    // return this.http.get<EquityData>('assets/data/equity.json');
  }

  getEsopData(): Observable<EquityData> {
    // Static data for ESOP
    const staticData: EquityData = {
      username: 'Deepak Kalwal',
      stockPrice: 100,
      totalStocksGranted: 100,
      remainingUnvestedStocks: 75,
      vestingPercentage: 25,
      nextVestingDate: 'Amount Needed to Exercise',
      currentValue: 2000
    };
    
    return of(staticData);
  }
}
