import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonText, IonSearchbar} from '@ionic/angular/standalone';
import { StockCardComponent } from '../stock-card/stock-card.component';
import { trending } from '../trending';

@Component({
  selector: 'app-discover-container',
  templateUrl: './discover-container.component.html',
  styleUrls: ['./discover-container.component.scss'],
  imports: [CommonModule, IonContent, IonText, StockCardComponent, IonSearchbar],
})
export class DiscoverContainerComponent {
  @Input() name?: string;
  
  // Import trending data
  trendingData = trending;
  
  // Get trending stocks array
  get trendingStocks() {
    return this.trendingData;
  }
}
