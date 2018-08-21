import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ControllService } from '../../generics/controll.service';

@Component({
  selector: 'conversor',
  templateUrl: 'conversor.html'
})
export class Conversor {

  realValue: number;
  convertValue: number;

  constructor(public navCtrl: NavController,
              private controllService: ControllService) {
  }

  convert() {
    this.convertValue = this.realValue * this.controllService.getValueOfDollar();
  }

}
