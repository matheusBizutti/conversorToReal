import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { ControllService } from '../../generics/controll.service';

@Component({
  selector: 'configurations',
  templateUrl: 'configurations.html'
})
export class Configurations {

  dollar: number;

  constructor(public navCtrl: NavController,
              private controllService: ControllService,
              public alertCtrl: AlertController) {
  }

  setValue() {
    this.controllService.setValueOfDollar(this.dollar);
    this.showAlert();
    this.dollar = null;
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: '',
      subTitle: 'Novo valor para o dollar salvo com sucesso.',
      buttons: ['OK']
    });
    alert.present();
  }

}
