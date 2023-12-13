import { Component } from '@angular/core';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';

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

   constructor(private _accounts:AccountService, private _router:Router) {
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

   edit(id:any){
    this._router.navigateByUrl("/dashboard/edit-account/"+id)
   }

   view(id:any){
    this._router.navigateByUrl("/dashboard/account-details/"+id)
   }

}
