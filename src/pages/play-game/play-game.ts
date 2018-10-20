import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';
import moment from 'moment';
import { PlayGameJodiPage } from '../play-game-jodi/play-game-jodi';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the PlayGamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-play-game',
  templateUrl: 'play-game.html',
})
export class PlayGamePage {
  currentDate: any;
  currentTime: any;
  userBalance: any;
  agList: any = 'DLSUPPER'
  username: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController, public storage: Storage,public http: HttpClient) {
    this.currentDate = moment().format('DD-MM-YYYY');
    this.currentTime = moment().format('hh:mm:ss');
    storage.get('username').then((val) => {
      this.username = val;
      this.getUserBalance()
   });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlayGamePage');
  }
  openJodiPage(){
    let jodiModal = this.modalCtrl.create(PlayGameJodiPage, { userId: 8675309 });
    jodiModal.present();
  }

  getUserBalance() {

    return new Promise(resolve => {
      this.http.get('http://serverside.pythonanywhere.com/getbalance/'+this.username+'/').subscribe(data => {
      try{
      this.userBalance = data[0]['balance']
      console.log(this.userBalance);

      }catch(e){
        this.userBalance = 0;
      }
      }, err => {
        this.userBalance = 0;
      });
    });
  }


}
