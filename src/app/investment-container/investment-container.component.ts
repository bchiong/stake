import { Component, Input } from '@angular/core';
import { IonContent, IonText, IonGrid, IonRow, IonCol} from '@ionic/angular/standalone';
import { StockCardComponent } from '../stock-card/stock-card.component';

@Component({
  selector: 'app-investment-container',
  templateUrl: './investment-container.component.html',
  styleUrls: ['./investment-container.component.scss'],
  imports: [IonContent, IonText, IonGrid, IonRow, IonCol, StockCardComponent],
})
export class InvestmentContainerComponent {
  @Input() name?: string;
}
