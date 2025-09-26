import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'investment',
        loadComponent: () =>
          import('./invest/investment-tab/investment.page').then((m) => m.InvestmentPage),
      },
      {
        path: 'discover',
        loadComponent: () =>
          import('./discover/discover-tab/discover.page').then((m) => m.DiscoverPage),
      },      {
        path: '',
        redirectTo: '/tabs/investment',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/investment',
    pathMatch: 'full',
  },
];
