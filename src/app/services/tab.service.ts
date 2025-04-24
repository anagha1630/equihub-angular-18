// services/tab.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabService {
  private activeTabSource = new BehaviorSubject<string>('RSU');
  activeTab$ = this.activeTabSource.asObservable();

  constructor() {}

  setActiveTab(tab: string) {
    this.activeTabSource.next(tab);
  }
}