import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonText } from '@ionic/angular/standalone';

@Component({
  selector: 'app-stock-card',
  templateUrl: './stock-card.component.html',
  styleUrls: ['./stock-card.component.scss'],
  standalone: true,
  imports: [CommonModule, IonText]
})
export class StockCardComponent {
  @Input() shortcode: string = '';
  @Input() name: string = '';
  @Input() type: string = 'Stock';
  @Input() stockPrice: string = '';
  @Input() logoUrl: string = '';
  @Input() variant: 'default' | 'lite' = 'default';
  @Input() categoryReverse: boolean = false;
  @Input() data1: string | null = null;
  @Input() data2: string | null = null;
  @Input() data3: string | null = null;
}
