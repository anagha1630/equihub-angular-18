import { Component, OnInit } from '@angular/core';
import { EquityService } from '../../services/equity.service';
import { TabService } from '../../services/tab.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  activeTab: string = 'RSU'; // Set default active tab to 'RSU'
  username: string = '';

  constructor(
    private equityService: EquityService,
    private tabService: TabService
  ) {}

  ngOnInit(): void {
    // Fetch user data when the component is loaded
    this.equityService.getEquityData().subscribe({
      next: (data) => {
        this.username = data.username;
      },
      error: (err) => {
        console.error('Error loading user data:', err);
      }
    });

    // Subscribe to tab changes
    this.tabService.activeTab$.subscribe(tab => {
      this.activeTab = tab;
    });
  }

  openNav() {
    // Placeholder method for opening nav (currently unused)
    throw new Error('Method not implemented.');
  }

  setActiveTab(tab: string) {
    // Update which tab is active when a nav button is clicked
    this.activeTab = tab;
    this.tabService.setActiveTab(tab);
  }
}