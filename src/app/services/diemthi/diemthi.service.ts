import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiemthiService {

  constructor(private http:HttpClient) { }
  getData(){
    let url =  `/aq/diemhksv/{mssv:"BA20EX003",nhhk:"20191"}`;
    return this.http.get(url);
  }
}
