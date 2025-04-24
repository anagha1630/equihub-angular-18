// app.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StockCardComponent } from './components/stock-card/stock-card.component';
import { VestingProgressComponent } from './components/vesting-progress/vesting-progress.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { EsopDashboardComponent } from './components/esop-dashboard/esop-dashboard.component';
import { EsopVestingProgressComponent } from './components/esop-vesting-progress/esop-vesting-progress.component';
import { VestingScheduleComponent } from './components/vesting-schedule/vesting-schedule.component';
import { TooltipDirective } from './tooltip.directive';
import { Routes } from '@angular/router';




  
// Ensure the correct path to the VestingScheduleComponent is used
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StockCardComponent,
    VestingProgressComponent,
    SideNavComponent,
    EsopDashboardComponent,
    EsopVestingProgressComponent,
    VestingScheduleComponent,
    TooltipDirective
  ],
  imports: [
    [CommonModule],
    BrowserModule,
    NgChartsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



