import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LichthiService {

  constructor(private http:HttpClient) { }

  getData(){
    let url = `/aq/lichthisv/{mssv:"BA20EX003",nhhk:"20201"}`;
    return this.http.get(url);
  }
}
