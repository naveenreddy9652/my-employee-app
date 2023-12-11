import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private baseUrl:string = "https://6128991386a213001729f9df.mockapi.io/test/v1/principals"

  constructor(private _httpClient:HttpClient) { }
  getUser():Observable<any>{
    return this._httpClient.get(this.baseUrl)
  }

  getFilter(name:string):Observable<any>{
    return this._httpClient.get(this.baseUrl+"?filter="+name)
  }

  getPages(pageNo:number):Observable<any>{
    return this._httpClient.get(this.baseUrl+"?limit=10&page="+pageNo)
  }

  getSortedAccounts(column:string, order:string):Observable<any>{
    return this._httpClient.get(this.baseUrl+"?sortBy="+column+"&order="+order)
  }
  deteleAccount(id:string):Observable<any>{
    return this._httpClient.delete(this.baseUrl+"/"+id)
  }

  createAccount(account:any):Observable<any>{
    return this._httpClient.post(this.baseUrl,account)
  }



}
