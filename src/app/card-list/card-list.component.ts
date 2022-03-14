import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.sass']
})
export class CardListComponent implements OnInit {

  dataRecived: any;
  selected:Date;
  serveyPeriods:Date;
constructor(private service_http:HttpService) { }

ngOnInit(){
  this.service_http.getData().subscribe(data=>{
  this.dataRecived= (data as any)[0] || [];
  console.log( this.dataRecived)
  })
}
}
