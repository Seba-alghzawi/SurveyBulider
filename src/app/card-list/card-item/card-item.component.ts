import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.sass']
})
export class CardItemComponent implements OnInit {
 @Input() recived:any;
 @Output() select=new EventEmitter();
 colored:boolean=false;// flage to colored card-border when clicked 
  constructor() { }

  ngOnInit(): void {
     this.recived.SurveyPeriods=JSON.parse(this.recived.SurveyPeriods)
  }
      onclick()
      {
        this.colored=!this.colored;
        this.select.emit();

      }
}
