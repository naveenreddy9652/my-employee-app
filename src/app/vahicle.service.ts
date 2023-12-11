import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VahicleService {

  private baseUrl:string = 'https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction'

  constructor(private _httpClient:HttpClient) { }
  getVahicle():Observable<any>{
      return this._httpClient.get(this.baseUrl);
    }
  getFilterVahicles(term:string):Observable<any>{
    return this._httpClient.get(this.baseUrl+'?filter='+term);
  }

  getPages(pageNO:string):Observable<any>{
    return this._httpClient.get(this.baseUrl+'?limit=10&page='+pageNO);
  }

  sortedVahicles(column:string, order:string):Observable<any>{
    return this._httpClient.get(this.baseUrl+'?sortBy='+column+'&order='+order)
  }

  deleteVahicle(id:string):Observable<any>{
    return this._httpClient.delete(this.baseUrl+'/'+id)
  }

  createvahicle(vahicle:any):Observable<any>{
    return this._httpClient.post(this.baseUrl,vahicle)
  }

}
