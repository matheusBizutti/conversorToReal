import { Component } from '@angular/core';

import { Configurations } from '../configurations/configurations';
import { Conversor } from '../conversor/conversor';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  conversor = Conversor;
  configurations = Configurations;

  constructor() {

  }
}
