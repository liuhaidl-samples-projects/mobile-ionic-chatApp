import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { FindingPage } from '../finding/finding';
import { MePage } from '../me/me';

@Component({
  selector: 'tabs-style',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = FindingPage;
  tab3Root: any = MePage;

  constructor() {

  }
}
