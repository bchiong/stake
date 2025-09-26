import { Component, Input } from '@angular/core';
import { IonText } from '@ionic/angular/standalone';

@Component({
  selector: 'app-stock-card',
  templateUrl: './stock-card.component.html',
  styleUrls: ['./stock-card.component.scss'],
  standalone: true,
  imports: [IonText]
})
export class StockCardComponent {
  @Input() shortcode: string = '';
  @Input() name: string = '';
  @Input() type: string = 'Stock';
  @Input() stockPrice: string = '';
  @Input() logoUrl: string = '';
  @Input() variant: 'default' | 'lite' = 'default';
}
