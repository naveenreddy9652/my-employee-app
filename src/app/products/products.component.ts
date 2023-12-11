import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  public delivery:string = ''
  public name: string = '';
  public price: number = 0;
  public rating: number = 0;
  public searchItem: string = '';
  public totalItems: number = 0;
  public value: boolean = false;
  public priceValue: boolean = false;
  public totalPrice :number = 0

  
  public products : any=[
     {
      name: 'pen', price: 10, rating: 3, freeDelivery: 'yes',
     },
     {
      name: 'laptop', price: 50000, rating: 5, freeDelivery: 'yes',
     },
     {
      name: 'shirt', price: 800, rating: 3.5, freeDelivery: 'no',
     }
  ]

  addToCart(){
    this.products.push(
      {
        name: this.name, price: this.price, rating: this.rating, freeDelivery: this.delivery
      }
    )
    this.name = '';
    this.price = 0;
    this.rating = 0;

  }

  deleteProduct(i:any){
     this.products.splice(i,1)
  }

  searchProduct(){
    var searchableProducts =  this.products.filter((product:any)=>product.name.includes(this.searchItem))
    this.products = searchableProducts
  }
  
  onlyFreeDelivery(){
    var filterProducts = this.products.filter((product:any)=>product.freeDelivery === 'yes')
    this.products = filterProducts
  }

  priceLowToHigh(){
     this.products.sort((a:any, b:any) => a.price-b.price)
    
  }

  priceHighToLow(){
    this.products.sort((a:any, b:any) => b.price-a.price)
  }

  ratingLowToHigh(){
    this.products.sort((a:any, b:any) => a.rating-b.rating)
    
  }

  ratingHighToLow(){
    this.products.sort((a:any, b:any) => b.rating-a.rating)

  }

  apply50Off(){
    this.products.map((product:any) => {
      product.price = product.price / 2
      return product
    })
  }

  pricewithDeliveryCharges(){
    this.products.map((product:any) => {
      product.price = product.price + 20;
      return product
    })
  }

  TotalPrice(){
    this.totalPrice = this.products.reduce((sum:any,product:any)=> sum+product.price,0)
    this.priceValue = true
  }

  TotalCarts(){
    this.value = true
    this.totalItems = this.products.length
  }








}
