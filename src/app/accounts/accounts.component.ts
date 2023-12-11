import { Component } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {
  public accounts: any=[];
  public name: string='';
  public pageNo:number = 0;
  public column:string = '';
  public order:string = '';

   constructor(private _accounts:AccountService) {
    _accounts.getUser().subscribe(
      (data:any)=>{
       this.accounts = data
      },
      (err:any)=>{
        alert("Internal Server Error")
      }
    )
   }

   pagination(){
     this._accounts.getPages(this.pageNo).subscribe(
      (data:any)=>{
        this.accounts = data;
      },
      (data:any)=>{
        alert("Internal Server Error")
        
      }
     )
   }

   searchAcounts(){
    this._accounts.getFilter(this.name).subscribe(
       (data:any)=>{
          this.accounts = data;
       },
       (err:any)=>{
          alert('Internal Server Error')
          
       }
    )
   }

   sort(){
    this._accounts.getSortedAccounts(this.column, this.order).subscribe(
       (data:any)=>{
          this.accounts = data
       },
       (err:any)=>{
          alert('Internal Server Error')
          
       }
    )
   }

   delete(id:string){
    this._accounts.deteleAccount(id).subscribe(
      (data:any)=>{
        alert("Deleted Successfully");
        location.reload()
      },
      (err:any)=>{
        alert('Internal Server Error')

      }
    )
   }



}
