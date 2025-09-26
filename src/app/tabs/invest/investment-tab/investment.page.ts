import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { InvestmentContainerComponent } from '../investment-container/investment-container.component';

@Component({
  selector: 'app-investment',
  templateUrl: 'investment.page.html',
  styleUrls: ['investment.page.scss'],
  imports: [IonContent, InvestmentContainerComponent],
})
export class InvestmentPage {
  constructor() {}
}
