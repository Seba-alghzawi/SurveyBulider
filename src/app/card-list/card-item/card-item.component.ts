import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.sass']
})
export class CardItemComponent implements OnInit {
 @Input() recived:any;
 @Output() select=new EventEmitter();
 colored:boolean=true;// flage to colored card-border when clicked 
 flag:boolean=false;
  dialogSurvey:any=null;
  constructor() { }

  ngOnInit(): void {
    if(typeof this.recived.SurveyPeriods == 'string')
     this.recived.SurveyPeriods=JSON.parse(this.recived.SurveyPeriods)
  }
     
      SelectedSurvey(data:any,item:any){  
        // item.checked=!item.checked; 
        if(this.flag==true){
          this.dialogSurvey=null;
          this.flag= !this.flag;
        }  
        else{
          this.dialogSurvey=data;
          this.flag= !this.flag;;
        }
        this.colored=!this.colored;
           console.log(this.dialogSurvey)
          this.select.emit(this.dialogSurvey);
         
    }
}
