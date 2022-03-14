import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.sass']
})
export class CardItemComponent implements OnInit {
 @Input() recived:any;
 d_recive:any;
  constructor() { }

  ngOnInit(): void {
     this.recived.SurveyPeriods=JSON.parse(this.recived.SurveyPeriods)
  }

}
