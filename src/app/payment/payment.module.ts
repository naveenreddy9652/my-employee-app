import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { UpiPaymentComponent } from './upi-payment/upi-payment.component';
import { CardPaymentComponent } from './card-payment/card-payment.component';
import { NetBankingPaymentComponent } from './net-banking-payment/net-banking-payment.component';


@NgModule({
  declarations: [
    UpiPaymentComponent,
    CardPaymentComponent,
    NetBankingPaymentComponent
  ],
  imports: [
    CommonModule,
    PaymentRoutingModule
  ]
})
export class PaymentModule { }
