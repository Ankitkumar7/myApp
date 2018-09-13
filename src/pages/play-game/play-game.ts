import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';
import moment from 'moment';
import { PlayGameJodiPage } from '../play-game-jodi/play-game-jodi';


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
  agList: any = 'DLSUPPER'
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
    this.currentDate = moment().format('DD-MM-YYYY');
    this.currentTime = moment().format('hh:mm:ss');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlayGamePage');
  }
  openJodiPage(){
    let jodiModal = this.modalCtrl.create(PlayGameJodiPage, { userId: 8675309 });
    jodiModal.present();
  }

}
