import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpiPaymentComponent } from './upi-payment/upi-payment.component';
import { CardPaymentComponent } from './card-payment/card-payment.component';
import { NetBankingPaymentComponent } from './net-banking-payment/net-banking-payment.component';

const routes: Routes = [
  {path:'',component:UpiPaymentComponent},
  {path:'upi-payment',component:UpiPaymentComponent},
  {path:'card-payment',component:CardPaymentComponent},
  {path:'net-banking',component:NetBankingPaymentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
