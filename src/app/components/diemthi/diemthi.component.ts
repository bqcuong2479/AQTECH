import { Component, OnInit } from '@angular/core';
import { DiemthiService } from 'src/app/services/diemthi/diemthi.service';

@Component({
  selector: 'app-diemthi',
  templateUrl: './diemthi.component.html',
  styleUrls: ['./diemthi.component.css']
})
export class DiemthiComponent implements OnInit {
  data:any=[];
  constructor(private Diemthi:DiemthiService) {
    this.Diemthi.getData().subscribe(data=>{
      this.data=data;
    })
   }

  ngOnInit(): void {
  }

}
