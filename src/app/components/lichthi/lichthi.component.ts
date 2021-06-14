import { Component, OnInit } from '@angular/core';
import { LichthiService } from 'src/app/services/lichthi/lichthi.service';

@Component({
  selector: 'app-lichthi',
  templateUrl: './lichthi.component.html',
  styleUrls: ['./lichthi.component.css']
})
export class LichthiComponent implements OnInit {
  data:any=[];
  getInput(value:any)
  {
    let Mssv = value.mssv;
    let Nhhk = value.nhhk;
      this.Lichthi.getData(Mssv,Nhhk).subscribe(data=>{
        this.data=data;
  })
  }
  constructor(private Lichthi:LichthiService) {
   }

  ngOnInit(): void {
  }

}
