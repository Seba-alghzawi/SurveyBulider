
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import{ServeyService}from'../../servey.service';
@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.sass'],
  
})
export class CardItemComponent implements OnInit {
 @Input() recived:any;
 @Output() select=new EventEmitter();

 icon_test:boolean=false;
 flag=false;
icon_onclick:boolean=true;
dialogSurvey:any;
  constructor(public survey_service :ServeyService) { }

  ngOnInit(): void {
    if(typeof this.recived.SurveyPeriods == 'string')
     this.recived.SurveyPeriods=JSON.parse(this.recived.SurveyPeriods)
  }
     
      SelectedSurvey(){  
          this.select.emit(this.recived.TEMPLATE_ID);
          this.survey_service.SelectedCard(this.recived.TEMPLATE_ID); 
          
          
    }
}
