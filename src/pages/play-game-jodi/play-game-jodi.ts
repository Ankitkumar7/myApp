import { Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { WheelSelector } from '@ionic-native/wheel-selector';

/**
 * Generated class for the PlayGameJodiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-play-game-jodi',
  templateUrl: 'play-game-jodi.html',
})
export class PlayGameJodiPage {
  @ViewChild(Slides) slides: Slides;
  count: any = [];
  countFromFifty: any = [];
  jsonData: any;
  getLotteryData: any = [{
    one:'',
    two:'',
    three:'',
    four:'',
    five:'',
    six:'',
    seven:'',
    eight:'',
    nine:'',
    eleven:'',
    tweleve:'',
    thirteen:'',
    fourteen:'',
    fifteen:'',
    sixteen:'',
    seventeen:'',
    eightin:'',
    nineteen:'',
    twnty:'',
    twntyone:'',
    twntytwo:'',
    twntythree:'',
    twntyfour:'',
    twntyfive:'',
    twntysix:'',
    twntyseven:'',
    twntyeight:'',
    twntynine:'',
    thrty:'',
    thrtyone:'',
    thrtytwo:'',
    thrtythree:'',
    thrtyfour:'',
    thrtyfive:'',
    thrtysix:'',
    thrtyseven:'',
    thrtyeight:'',
    thrtynine:'',
    fourty:'',
    fourtyone:'',
    fourtytwo:'',
    fourtythree:'',
    fourtyfour:'',
    fourtyfive:'',
    fourtysix:'',
    fourtyseven:'',
    fourtyeight:'',
    fourtynine:'',
    fifty: '',
    fiftyone: '',
    fiftytwo: '',
    fiftythree: '',
    fiftyfour: '',
    fiftyfive: '',
    fiftysix: '',
    fiftyseven: '',
    fiftyeight: '',
    fiftynine: '',
    sixty: '',
    sixtyone: '',
    sixtytwo: '',
    sixtythree: '',
    sixtyfour: '',
    sixtyfive: '',
    sixtysix: '',
    sixtyseven: '',
    sixtyeight: '',
    sixtynine: '',
    seventy: '',
    seventyone: '',
    seventytwo: '',
    seventythree: '',
    seventyfour: '',
    seventyfive: '',
    seventysix: '',
    seventyseven: '',
    seventyeight: '',
    seventynine: '',
    eighty: '',
    eightyone: '',
    eightytwo: '',
    eightythree: '',
    eightyfour: '',
    eightyfive: '',
    eightysix: '',
    eightysevem: '',
    eightyeight: '',
    eightynine: '',
    ninty: '',
    nintyone: '',
    nintytwo: '',
    nintythree: '',
    nintyfour: '',
    nintyfive: '',
    nintysix: '',
    nintyseven: '',
    nintyeight: '',
    nintynine: '',
    hundred: '',
  }]

  constructor(public navCtrl: NavController, public navParams: NavParams, private selector: WheelSelector) {
      for(let i = 1 ; i<= 100 ; i++){
        this.count.push(i)
      }
      for(let index = 51; index <= 100; index++){
        this.countFromFifty.push(index)
      }
      this.jsonData = {
      numbers: [
       { description: "1" },
        { description:"2" },
        { description: "3" },
        { description: "4" },
        { description: "5" },
        { description: "6" },
        { description: "7" },
        { description: "8" },
        { description: "9" },
        { description: "10" },
        { description: "12" },
        { description: "13" },
        { description: "14" },
        { description: "15" },
        { description: "16" },
        { description: "17" },
        { description: "18" },
        { description: "19" },
        { description: "20" },
        { description: "21" },
        { description: "22" },
        { description: "23" },
        { description: "24" },
        { description: "25" },
        { description: "26" },
        { description: "27" },
        { description: "28" },
        { description: "29" },
        { description: "30" },
        { description: "31" },
        { description: "32" },
        { description: "33" },
        { description: "34" },
        { description: "35" },
        { description: "36" },
        { description: "36" },
        { description: "38" },
        { description: "39" },
        { description: "40" },
        { description: "41" },
        { description: "42" },
        { description: "43" },
        { description: "45" },
        { description: "46" },
        { description: "47" },
        { description: "48" },
        { description: "49" },
        { description: "50" },
        { description: "51" },
        { description: "52" },
        { description: "53" },
        { description: "54" },
        { description: "55" },
        { description: "56" },
        { description: "57" },
        { description: "58" },
        { description: "59" },
        { description: "60" },
        { description: "61" },
        { description: "62" },
        { description: "63" },
        { description: "64" },
        { description: "65" },
        { description: "66" },
        { description: "67" },
        { description: "68" },
        { description: "69" },
        { description: "70" },
        { description: "71" },
        { description: "72" },
        { description: "73" },
        { description: "74" },
        { description: "75" },
        { description: "76" },
        { description: "77" },
        { description: "78" },
        { description: "79" },
        { description: "80" },
        { description: "81" },
        { description: "82" },
        { description: "83" },
        { description: "84" },
        { description: "85" },
        { description: "86" },
        { description: "87" },
        { description: "88" },
        { description: "89" },
        { description: "90" },
        { description: "91" },
        { description: "92" },
        { description: "93" },
        { description: "94" },
        { description: "95" },
        { description: "96" },
        { description: "97" },
        { description: "98" },
        { description: "99" },
        { description: "100" },


      ],
      fruits: [
        { description: "Apple" },
        { description: "Banana" },
        { description: "Tangerine" }
      ],
      firstNames: [
        { name: "Fred", id: '1' },
        { name: "Jane", id: '2' },
        { name: "Bob", id: '3' },
        { name: "Earl", id: '4' },
        { name: "Eunice", id: '5' }
      ],
      lastNames: [
        { name: "Johnson", id: '100' },
        { name: "Doe", id: '101' },
        { name: "Kinishiwa", id: '102' },
        { name: "Gordon", id: '103' },
        { name: "Smith", id: '104' }
      ]
    };
  }

  getFirstLoteryNumber(id) {
    this.selector.show({
      title: "How Many?",
      items: [
        this.jsonData.numbers
      ],
    }).then(
      result => {
        if(id === 1){
          this.getLotteryData.one = result[0].description
          alert(this.getLotteryData.one)

        }
        if(id === 2){
          this.getLotteryData.two = result[0].description
        }
        if(id === 3){
          this.getLotteryData.three = result[0].description
        }
        if(id === 4){
          this.getLotteryData.four = result[0].description
        }
        if(id === 5){
          this.getLotteryData.five = result[0].description
        }
        if(id === 6){
          this.getLotteryData.six = result[0].description
        }
        if(id === 7){
          this.getLotteryData.seven = result[0].description
        }
        if(id === 8){
          this.getLotteryData.eight = result[0].description
        }
        if(id === 9){
          this.getLotteryData.nine = result[0].description
        }
        if(id === 10){
          this.getLotteryData.ten = result[0].description
        }
        if(id === 11){
          this.getLotteryData.eleven = result[0].description
        }
        if(id === 12){
          this.getLotteryData.tweleve = result[0].description
        }
        if(id === 13){
          this.getLotteryData.thirteen = result[0].description
        }
        if(id === 14){
          this.getLotteryData.fourteen = result[0].description
        }
        if(id === 15){
          this.getLotteryData.fifteen = result[0].description
        }
        if(id === 16){
          this.getLotteryData.sixteen = result[0].description
        }
        if(id === 17){
          this.getLotteryData.seventeen = result[0].description
        }
        if(id === 18){
          this.getLotteryData.eightin = result[0].description
        }
        if(id === 19){
          this.getLotteryData.nineteen = result[0].description
        }
        if(id === 20){
          this.getLotteryData.twnty = result[0].description
        }
        if(id === 21){
          this.getLotteryData.twntyone = result[0].description
        }
        if(id === 22){
          this.getLotteryData.twntytwo = result[0].description
        }
        if(id ===  23 ){
          this.getLotteryData.twntythree = result[0].description
        }
        if(id ===  24 ){
          this.getLotteryData.twntyfour = result[0].description
        }
        if(id ===  25 ){
          this.getLotteryData.twntyfive = result[0].description
        }
        if(id ===  26 ){
          this.getLotteryData.twntysix = result[0].description
        }
        if(id ===  27 ){
          this.getLotteryData.twntyseven = result[0].description
        }
        if(id ===  28 ){
          this.getLotteryData.twntyeight = result[0].description
        }
        if(id ===  29 ){
          this.getLotteryData.twntynine = result[0].description
        }
        if(id ===  30 ){
          this.getLotteryData.thrty = result[0].description
        }
        if(id ===  31 ){
          this.getLotteryData.thrtyone = result[0].description
        }
        if(id ===  32 ){
          this.getLotteryData.thrtytwo = result[0].description
        }
        if(id ===  33 ){
          this.getLotteryData.thrtythree = result[0].description
        }
        if(id ===  34 ){
          this.getLotteryData.thrtyfour = result[0].description
        }
        if(id ===  35 ){
          this.getLotteryData.thrtyfive = result[0].description
        }
        if(id ===  36 ){
          this.getLotteryData.thrtysix = result[0].description
        }
        if(id ===  30 ){
          this.getLotteryData.thrtyseven = result[0].description
        }
        if(id ===  30 ){
          this.getLotteryData.thrtyeight = result[0].description
        }
        if(id ===  39 ){
          this.getLotteryData.thrtynine = result[0].description
        }
        if(id ===  40 ){
          this.getLotteryData.fourty = result[0].description
        }
        if(id ===  41 ){
          this.getLotteryData.fourtyone = result[0].description
        }
        if(id ===  42 ){
          this.getLotteryData.fourtytwo = result[0].description
        }
        if(id ===  43 ){
          this.getLotteryData.fourtythree = result[0].description
        }
        if(id ===  44 ){
          this.getLotteryData.fourtyfour = result[0].description
        }
        if(id ===  45 ){
          this.getLotteryData.fourtyfive = result[0].description
        }
        if(id ===  46 ){
          this.getLotteryData.fourtysix = result[0].description
        }
        if(id ===  47 ){
          this.getLotteryData.fourtyseven = result[0].description
        }
        if(id ===  48 ){
          this.getLotteryData.fourtyeight = result[0].description
        }
        if(id ===  49 ){
          this.getLotteryData.fourtynine = result[0].description
        }
        if(id ===  50 ){
          this.getLotteryData.fifty = result[0].description
        }
        if(id ===  51 ){
          this.getLotteryData.fiftyone = result[0].description
        }
        if(id ===  52 ){
          this.getLotteryData.fiftytwo = result[0].description
        }if(id ===  53 ){
          this.getLotteryData.fiftythree = result[0].description
        }if(id ===  54 ){
          this.getLotteryData.fiftyfour = result[0].description
        }if(id ===  55 ){
          this.getLotteryData.fiftyfive = result[0].description
        }if(id ===  56 ){
          this.getLotteryData.fiftysix = result[0].description
        }if(id ===  57 ){
          this.getLotteryData.fiftyseven = result[0].description
        }if(id ===  58 ){
          this.getLotteryData.fiftyeight = result[0].description
        }if(id ===  59 ){
          this.getLotteryData.fiftynine = result[0].description
        }if(id ===  60 ){
          this.getLotteryData.sixty = result[0].description
        }
        if(id ===  61 ){
          this.getLotteryData.sixtyone = result[0].description
        }
        if(id ===  62 ){
          this.getLotteryData.sixtytwo = result[0].description
        }
        if(id ===  63 ){
          this.getLotteryData.sixtythree = result[0].description
        }
        if(id ===  64 ){
          this.getLotteryData.sixtyfour = result[0].description
        }
        if(id ===  65 ){
          this.getLotteryData.sixtyfive = result[0].description
        }
        if(id ===  66 ){
          this.getLotteryData.sixtysix = result[0].description
        }
        if(id ===  67 ){
          this.getLotteryData.sixtyseven = result[0].description
        }
        if(id ===  68 ){
          this.getLotteryData.sixtynine = result[0].description
        }
        if(id ===  69 ){
          this.getLotteryData.sixtynine = result[0].description
        }
        if(id ===  70 ){
          this.getLotteryData.seventy = result[0].description
        }if(id ===  71 ){
          this.getLotteryData.seventyone = result[0].description
        }if(id ===  72 ){
          this.getLotteryData.seventytwo = result[0].description
        }if(id ===  73 ){
          this.getLotteryData.seventythree = result[0].description
        }if(id ===  74 ){
          this.getLotteryData.seventyfour = result[0].description
        }if(id ===  75 ){
          this.getLotteryData.seventyfive = result[0].description
        }if(id ===  76 ){
          this.getLotteryData.seventysix = result[0].description
        }
        if(id ===  77 ){
          this.getLotteryData.seventyseven = result[0].description
        }
        if(id ===  78 ){
          this.getLotteryData.seventyeight = result[0].description
        }
        if(id ===  79 ){
          this.getLotteryData.seventynine = result[0].description
        }
        if(id ===  80 ){
          this.getLotteryData.eighty = result[0].description
        }
        if(id ===  81 ){
          this.getLotteryData.eightyone = result[0].description
        }
        if(id ===  82 ){
          this.getLotteryData.eightytwo = result[0].description
        }
        if(id ===  83 ){
          this.getLotteryData.eightythree = result[0].description
        }
        if(id ===  84 ){
          this.getLotteryData.eightyfour = result[0].description
        }
        if(id ===  85 ){
          this.getLotteryData.eightyfive = result[0].description
        }
        if(id ===  86 ){
          this.getLotteryData.eightysix = result[0].description
        }
        if(id ===  87 ){
          this.getLotteryData.eightysevem = result[0].description
        }
        if(id ===  88 ){
          this.getLotteryData.eightyeight = result[0].description
        }
        if(id ===  89 ){
          this.getLotteryData.eightynine = result[0].description
        }
        if(id ===  90 ){
          this.getLotteryData.ninty = result[0].description
        }
        if(id ===  91 ){
          this.getLotteryData.nintyone = result[0].description
        }
        if(id ===  92 ){
          this.getLotteryData.nintytwo = result[0].description
        }
        if(id ===  93 ){
          this.getLotteryData.nintythree = result[0].description
        } if(id ===  94 ){
          this.getLotteryData.nintyfour = result[0].description
        } if(id ===  95 ){
          this.getLotteryData.nintyfive = result[0].description
        } if(id ===  96 ){
          this.getLotteryData.nintysix = result[0].description
        } if(id ===  97 ){
          this.getLotteryData.nintyseven = result[0].description
        } if(id ===  98 ){
          this.getLotteryData.nintyeight = result[0].description
        } if(id ===  99 ){
          this.getLotteryData.nintynine = result[0].description
        } if(id ===  100 ){
          this.getLotteryData.hundred = result[0].description
        }


        console.log(result[0].description);
      },
      err => console.log('Error: ', err)
      );
     console.log(this.getLotteryData);
  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad PlayGameJodiPage');
  }
  nextSlide(){
    this.slides.slideTo(2, 500);
  }
  prevSlideFirst(){
    this.slides.slidePrev();
  }
  check(){
  console.log(this.getLotteryData)
  }
  goToHarupPage(){
  }

}
