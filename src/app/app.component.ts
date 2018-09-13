import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { NetToPayPage } from '../pages/net-to-pay/net-to-pay';
import { TicketHistoryPage } from '../pages/ticket-history/ticket-history';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { PlayGamePage } from '../pages/play-game/play-game';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      // { title: 'Home', component: HomePage },
      {title: 'Dashboard', component: DashboardPage},
      { title: 'Play Game', component: PlayGamePage },
      { title: 'Ticket History', component: TicketHistoryPage },
      { title: 'Draw History', component: ListPage },
      { title: 'Net To Pay', component: NetToPayPage },
      { title: 'Balance History', component: ListPage },
      { title: 'Resullt Chart', component: ListPage },
      { title: 'Change Password', component: ListPage },
      { title: 'Logout', component: ListPage }

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
