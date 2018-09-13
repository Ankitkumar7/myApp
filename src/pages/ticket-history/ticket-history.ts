import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TicketHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ticket-history',
  templateUrl: 'ticket-history.html',
})
export class TicketHistoryPage {
  myDate: String = new Date().toISOString();
  gameType: string = 'faridabadNight';
  type: string = "jodi";
  isAndroid: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TicketHistoryPage');
  }

}
