import { Component, OnInit } from '@angular/core';
import { TkbService } from '../../services/tkb/tkb.service'
@Component({
  selector: 'app-tkb',
  templateUrl: './tkb.component.html',
  styleUrls: ['./tkb.component.css']
})
export class TkbComponent implements OnInit {
  data:any=[];
  constructor(private Tkb:TkbService) {
    this.Tkb.getData().subscribe(data=>{
      this.data=data;
    })
   }

  ngOnInit(): void {
  }

}
