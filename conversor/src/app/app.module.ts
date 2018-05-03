import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { AppConversor } from './app.component';

import { Configurations } from './../pages/configurations/configurations';
import { Conversor } from '../pages/conversor/conversor';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    AppConversor,
    Configurations,
    Conversor,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(AppConversor)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    AppConversor,
    Configurations,
    Conversor,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
