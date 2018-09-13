import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TicketHistoryPage } from './ticket-history';

@NgModule({
  declarations: [
    TicketHistoryPage,
  ],
  imports: [
    IonicPageModule.forChild(TicketHistoryPage),
  ],
})
export class TicketHistoryPageModule {}
