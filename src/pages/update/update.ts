import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Headers, Http, Response } from '@angular/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the UpdatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update',
  templateUrl: 'update.html',
})
export class UpdatePage {
  update: FormGroup;
  balance: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private http: Http, private toastr: ToastController, private fb: FormBuilder
  ) {
    this.update = this.fb.group({
      balance: ['', Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdatePage');
  }

  successMessage() {
    let toast = this.toastr.create({
      message: 'Balance updated successfully',
      duration: 3000,
      position: 'top'
    });
    // this.navCtrl.setRoot(LoginPage);

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

  updatebalance(){
    console.log(this.update.value)
    var headers = new Headers();
    this.http.post('http://serverside.pythonanywhere.com/api/users',
        {
          balance: this.update.value.balance,

        }, {
          headers: headers
        })
      .map((res: Response) => res.json())
      .subscribe(data => (console.log(data)),
        error => this.LoginErrorMessage(), // if server status null , show alert message
        () => this.successMessage())
  }


}
