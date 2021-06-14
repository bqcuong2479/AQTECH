import { Component, OnInit } from '@angular/core';
import { DiemthiService } from 'src/app/services/diemthi/diemthi.service';

@Component({
  selector: 'app-diemthi',
  templateUrl: './diemthi.component.html',
  styleUrls: ['./diemthi.component.css']
})
export class DiemthiComponent implements OnInit {
  data:any=[];
  getInput(value: any){
    
    let Mssv=value.mssv;
    let Nhhk=value.nhhk;
    this.Diemthi.getData(Mssv,Nhhk).subscribe(data=>{
      this.data=data;
    })
  }
  constructor(private Diemthi:DiemthiService) {
   }

  ngOnInit(): void {
  }

}
