import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }
  myDate: String = new Date().toISOString();
  userBalance: any;
  constructor(public navCtrl: NavController,public http: HttpClient) {
    this.getUserBalance()

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
