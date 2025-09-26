import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { InvestmentContainerComponent } from '../investment-container/investment-container.component';

@Component({
  selector: 'app-investment',
  templateUrl: 'investment.page.html',
  styleUrls: ['investment.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, InvestmentContainerComponent],
})
export class InvestmentPage {
  constructor() {}
}
