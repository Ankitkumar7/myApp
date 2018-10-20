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
import { PlayGameJodiPage } from '../pages/play-game-jodi/play-game-jodi';
import { LoginPage } from '../pages/login/login';
import { Storage } from '@ionic/storage';
import { SummaryPage } from '../pages/summary/summary';
import { UpdatePage } from '../pages/update/update';
import { AdminDashboardPage } from '../pages/admin-dashboard/admin-dashboard';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any;
  token: any;
  pages: Array<{title: string, component: any}>;
  adminPage: Array<{title: string, Component: any}>;
  userName: any;
  constructor(public storage: Storage, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
    storage.get('token').then((val) => {
       this.token = val;
       if(this.token) {
         this.rootPage = HomePage
       }
       else{
         this.rootPage = LoginPage
       }
    });

    storage.get('username').then((val) => {
      this.userName = val;
   });


    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      {title: 'Dashboard', component: DashboardPage},
      { title: 'Play Game', component: PlayGamePage },
      { title: 'Ticket History', component: TicketHistoryPage },
      { title: 'Draw History', component: ListPage },
      { title: 'Net To Pay', component: NetToPayPage },
      { title: 'Balance History', component: ListPage },
      { title: 'Resullt Chart', component: ListPage },
      { title: 'Change Password', component: ListPage },
      { title: 'Logout', component: LoginPage },
      { title: 'Summary', component: SummaryPage },
      { title: 'Balance', component: UpdatePage },

    ];

    if(this.userName === 'Euros') {
      this.adminPage = [
        {title: 'Admin Dashboard', Component: AdminDashboardPage}
    ]
    }


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
  openAdminPage(page) {
    this.nav.setRoot(page.component);
  }
}
