import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiemthiService {

  constructor(private http:HttpClient) { }
  getData(mssv:string, nhhk:string){
    let url =  `/aq/diemhksv/{mssv:"${mssv}",nhhk:"${nhhk}"}`;
    return this.http.get(url);
  }
}
