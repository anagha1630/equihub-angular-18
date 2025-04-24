import { Component, OnInit } from '@angular/core';
import { TabService } from './services/tab.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  activeTab: string = 'RSU'; // Default to RSU tab

  constructor(private tabService: TabService) {}

  ngOnInit() {
    // Subscribe to tab changes
    this.tabService.activeTab$.subscribe(tab => {
      this.activeTab = tab;
    });
  }
}