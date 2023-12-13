import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
   public users: any = []
   public term:string = ''
   public column:string = ''
   public order:string = ''
   public pageNo:number = 0


  constructor(private _userService:UserService,private _router:Router){
     _userService.getUser().subscribe(
      (data:any) =>{
       this.users = data
      },
      (err:any)=>{
         alert('Internal Server Error')
      }
     )
  }
   
  getFilterdUsers(){
   this._userService.getFilter(this.term).subscribe(
      (data:any)=>{
         this.users = data
      },
      (err:any)=>{
         alert('Internal Server Error')
         
      }
   )
  }
  sort(){
   this._userService.getSortedUsers(this.column, this.order).subscribe(
      (data:any)=>{
         this.users = data
      },
      (err:any)=>{
         alert('Internal Server Error')
         
      }
   )
  }

  page(){
   this._userService.getPageNumber(this.pageNo).subscribe(
      (data:any)=>{
         this.users = data
      },
      (err:any)=>{
         alert('Internal Server Error')
         
      }
   )
  }

  delete(id:string){
   this._userService.deleteUser(id).subscribe(
      (data:any)=>{
         alert("deleted successfully")
         location.reload()
      },
      (err:any)=>{
         alert('Internal Server Error')
         
      }
   )
  }

  view(id:number){
   this._router.navigateByUrl('/dashboard/user-details/'+id)
  }

  edit(id:number){
   this._router.navigateByUrl('/dashboard/edit-user/'+id)
  }
}
