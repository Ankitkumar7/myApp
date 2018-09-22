import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Response, Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { LoginPage } from '../login/login';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  private reigsterForm : FormGroup;

  userName: any;
  emailId: any;
  password: any;
  constructor(public toastr: ToastController,public http: Http, private formBuilder: FormBuilder ,public navCtrl: NavController, public navParams: NavParams) {
    this.reigsterForm = this.formBuilder.group({
      userName: ['', Validators.required],
      emailId: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
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

  register(){
    console.log(this.reigsterForm.value)
    var headers = new Headers();
    this.http.post('http://serverside.pythonanywhere.com/api/users',
        {
          username: this.reigsterForm.value.userName,
          email: this.reigsterForm.value.emailId,
          password: this.reigsterForm.value.password

        }, {
          headers: headers
        })
      .map((res: Response) => res.json())
      .subscribe(data => (console.log(data)),
        error => this.LoginErrorMessage(), // if server status null , show alert message
        () => this.successMessage())
  }

}
