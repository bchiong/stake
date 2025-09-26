import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonText, IonGrid, IonRow, IonCol} from '@ionic/angular/standalone';
import { StockCardComponent } from '../../../components/stock-card/stock-card.component';
import { holdings } from '../../../mock/holdings';
import { trending } from '../../../mock/trending';

@Component({
  selector: 'app-investment-container',
  templateUrl: './investment-container.component.html',
  styleUrls: ['./investment-container.component.scss'],
  imports: [CommonModule, IonContent, IonText, IonGrid, IonRow, IonCol, StockCardComponent],
})
export class InvestmentContainerComponent {
  @Input() name?: string;
  
  // Import holdings data
  holdingsData = holdings;
  
  // Import trending data
  trendingData = trending;
  
  // Get total equity
  get totalEquity(): string {
    return `$${this.holdingsData.total.toLocaleString()}`;
  }
  
  // Get stocks array
  get stocks() {
    return this.holdingsData.stocks;
  }
  
  // Get trending stocks array
  get trendingStocks() {
    return this.trendingData;
  }
}
