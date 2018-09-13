import { Component } from '@angular/core';

/**
 * Generated class for the NetToPayComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'net-to-pay',
  templateUrl: 'net-to-pay.html'
})
export class NetToPayComponent {

  text: string;

  constructor() {
    console.log('Hello NetToPayComponent Component');
    this.text = 'Hello World';
  }

}
