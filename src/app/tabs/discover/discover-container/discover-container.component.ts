import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonText, IonSearchbar, IonTitle, IonHeader} from '@ionic/angular/standalone';
import { StockCardComponent } from '../../../components/stock-card/stock-card.component';
import { trending } from '../../../mock/trending';

@Component({
  selector: 'app-discover-container',
  templateUrl: './discover-container.component.html',
  styleUrls: ['./discover-container.component.scss'],
  imports: [CommonModule, IonContent, IonText, StockCardComponent, IonSearchbar, IonHeader, IonTitle],
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
