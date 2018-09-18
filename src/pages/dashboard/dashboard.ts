import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  userBalance: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.getUserBalance()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }
  getUserBalance() {
    return new Promise(resolve => {
      this.http.get('http://127.0.0.1:8000/getbalance/abhishek/').subscribe(data => {
        this.userBalance = data[0]['balance']
      console.log(this.userBalance)

      }, err => {
        console.log(err);
      });
    });
  }

}
