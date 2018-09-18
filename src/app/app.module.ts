import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NetToPayPage } from '../pages/net-to-pay/net-to-pay';
import { TicketHistoryPage } from '../pages/ticket-history/ticket-history';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { PlayGamePage } from '../pages/play-game/play-game';
import { PlayGameJodiPage } from '../pages/play-game-jodi/play-game-jodi';
import { WheelSelector } from '@ionic-native/wheel-selector';
import { MultiPickerModule } from 'ion-multi-picker';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    NetToPayPage,
    TicketHistoryPage,
    DashboardPage,
    PlayGamePage,
    PlayGameJodiPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MultiPickerModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    NetToPayPage,
    TicketHistoryPage,
    DashboardPage,
    PlayGamePage,
    PlayGameJodiPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    WheelSelector,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
