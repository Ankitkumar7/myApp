import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { Response, Http, Headers } from '@angular/http';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  token: any = [];
  userName: any;
  password: any;

  constructor(public toastr: ToastController,public storage: Storage,public navCtrl: NavController, public navParams: NavParams, public http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  presentToast() {
    let toast = this.toastr.create({
      message: 'Login Successfull',
      duration: 3000,
      position: 'top'
    });
    this.navCtrl.setRoot(HomePage);

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
  LoginErrorMessage() {
    let toast = this.toastr.create({
      message: 'Login Unsuccessfull, please check your credentials',
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  login(){
    console.log(this.userName)
    console.log(this.userName)
    var headers = new Headers();
    this.http.post('http://serverside.pythonanywhere.com/login/',
        {
          username: this.userName,
          password: this.password,

        }, {
          headers: headers
        })
      .map((res: Response) => res.json())
      .subscribe(data => (this.token = data),
        error => this.LoginErrorMessage(), // if server status null , show alert message
        () =>   this.presentToast())
        this.storage.set("token",this.token);
        this.storage.set('username', this.userName);

  //   this.http
  //     .post('http://127.0.0.1:8000/login/',{username: this.userName,'password': this.password})
  //     .subscribe((res: Response) => {
  //       this.token = res['token'];
  //       this.storage.set('token', this.token,);
  //       this.storage.set('username', this.userName,);

  //     }, err=>console.log(err));
  // }

  }
  register(){
    this.navCtrl.push(RegisterPage)
  }
}
