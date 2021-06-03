import { Component, OnInit } from '@angular/core';
import { LichthiService } from 'src/app/services/lichthi/lichthi.service';

@Component({
  selector: 'app-lichthi',
  templateUrl: './lichthi.component.html',
  styleUrls: ['./lichthi.component.css']
})
export class LichthiComponent implements OnInit {
  data:any=[];
  constructor(private Lichthi:LichthiService) {
    this.Lichthi.getData().subscribe(data=>{
      this.data=data;
    })
   }

  ngOnInit(): void {
  }

}
