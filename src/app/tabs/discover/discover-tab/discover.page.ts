import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { DiscoverContainerComponent } from '../discover-container/discover-container.component';


@Component({
  selector: 'app-discover',
  templateUrl: 'discover.page.html',
  styleUrls: ['discover.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, DiscoverContainerComponent]
})
export class DiscoverPage {

  constructor() {}

}
