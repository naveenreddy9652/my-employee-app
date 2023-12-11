import { Component } from '@angular/core';
import { FlipkartProductsService } from '../flipkart-products.service';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent {
  
  public flipKartProducts:any = []

  constructor(private _flipKartProducts:FlipkartProductsService) {
    _flipKartProducts.getFlipkartProduct().subscribe(
      (data:any)=>{
        this.flipKartProducts = data
      },
      (err:any)=>{
        alert("Internal Server Error")
      }
    )
  }
}
