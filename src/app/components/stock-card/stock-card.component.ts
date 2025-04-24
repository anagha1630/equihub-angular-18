import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stock-card',
  templateUrl: './stock-card.component.html',
  styleUrls: ['./stock-card.component.scss']
})
export class StockCardComponent {
  @Input() title: string = '';
  @Input() value: number = 0;
  @Input() isCurrency: boolean = false;
  @Input() colorClass: 'dark-blue' | 'teal' = 'dark-blue';
  @Input() previousStockPrice!: number;
Math: any;

}
