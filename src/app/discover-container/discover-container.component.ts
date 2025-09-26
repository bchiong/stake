import { Component, Input } from '@angular/core';
import { IonContent, IonText} from '@ionic/angular/standalone';
import { StockCardComponent } from '../stock-card/stock-card.component';

@Component({
  selector: 'app-discover-container',
  templateUrl: './discover-container.component.html',
  styleUrls: ['./discover-container.component.scss'],
  imports: [IonContent, IonText, StockCardComponent],
})
export class DiscoverContainerComponent {
  @Input() name?: string;
}
