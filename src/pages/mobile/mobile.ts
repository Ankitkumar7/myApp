import { LoginPage } from './../login/login';
import { Http, Headers, Response } from '@angular/http';
import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the MobilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mobile',
  templateUrl: 'mobile.html',
})
export class MobilePage {
  mobileNumber: any;
  username: any;
  constructor(public toastr: ToastController,public storage: Storage,public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    storage.get('username').then((val) => {
      this.username = val;
   });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad MobilePage');
  }

  successMessage() {
    let toast = this.toastr.create({
      message: 'Register Successfull, Login now',
      duration: 3000,
      position: 'top'
    });
    this.navCtrl.setRoot(LoginPage);

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  }

  LoginErrorMessage() {
    let toast = this.toastr.create({
      message: 'Register Unsuccessfull',
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  mobilenumber(){
    var headers = new Headers();
    this.http.post('http://serverside.pythonanywhere.com/addmobile',
        {
          user: this.username,
          mobileNumber: this.mobileNumber

        }, {
          headers: headers
        })
      .map((res: Response) => res.json(),
    )
      .subscribe(data => (console.log(data)),
        error => this.LoginErrorMessage(), // if server status null , show alert message
        () => this.successMessage());
  }

}
