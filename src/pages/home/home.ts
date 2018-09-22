import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';

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
  username: any ;
  constructor(public storage: Storage,public navCtrl: NavController,public http: HttpClient) {
    storage.get('username').then((val) => {
      this.username = val;
      this.getUserBalance()


   });

  }

  getUserBalance() {
    console.log(this.username)
    return new Promise(resolve => {
      this.http.get('http://serverside.pythonanywhere.com/getbalance/'+this.username+'/').subscribe(data => {
        this.userBalance = data[0]['balance']
      console.log(this.userBalance)

      }, err => {
        console.log(err);
      });
    });
  }


}
