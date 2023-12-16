import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { AbouCeoComponent } from './abou-ceo/abou-ceo.component';



@NgModule({
  declarations: [
    AboutCompanyComponent,
    AbouCeoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AboutCompanyComponent
  ]
})
export class AboutModule { }
