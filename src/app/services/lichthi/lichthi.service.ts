import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LichthiService {

  constructor(private http:HttpClient) { }

  getData(mssv:string, nhhk:string){
    let url = `/aq/lichthisv/{mssv:"${mssv}",nhhk:"${nhhk}"}`;
    return this.http.get(url);
  }
}
