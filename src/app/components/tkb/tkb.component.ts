import { Component, OnInit } from '@angular/core';
import { TkbService } from '../../services/tkb/tkb.service'

@Component({
  selector: 'app-tkb',
  templateUrl: './tkb.component.html',
  styleUrls: ['./tkb.component.css']
})
export class TkbComponent implements OnInit {
  data:any=[];
  getInput(value:any)
  {
    let Mssv = value.mssv;
    let Ngay = value.date;
      this.Tkb.getData(Mssv,Ngay).subscribe(data=>{
        this.data=data;
  })
}
  constructor(private Tkb:TkbService) {
  }

  ngOnInit(): void {
  }

}
