import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl:string = "https://6128991386a213001729f9df.mockapi.io/test/v1/student"

  constructor(private _httpClient:HttpClient) {  }

    getUser():Observable<any>{
      return this._httpClient.get(this.baseUrl)
    }

    getFilter(name:string):Observable<any>{
      return this._httpClient.get(this.baseUrl+'filter='+name)
    }

    getSortedUsers(column:string, order:string):Observable<any>{
      return this._httpClient.get(this.baseUrl+'?sortBy='+column+'&order='+order)
    }
 
    getPageNumber(pageNo:number):Observable<any>{
      return this._httpClient.get(this.baseUrl+'?limit=10&page='+pageNo)
    }

    deleteUser(id:string):Observable<any>{
      return this._httpClient.delete(this.baseUrl+'/'+id)
    }
    createUser(data:any):Observable<any>{
      return this._httpClient.post(this.baseUrl+'/',data)
    }
 
}
