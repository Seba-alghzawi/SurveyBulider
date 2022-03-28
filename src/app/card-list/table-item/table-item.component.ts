import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog ,MatDialogConfig} from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { HttpService } from '../../http.service'
@Component({
  selector: 'app-table-item',
  templateUrl: './table-item.component.html',
  styleUrls: ['./table-item.component.sass']
})
export class TableItemComponent implements OnInit {
  @Input() recived_table:any;
  @Output() select_table=new EventEmitter();
  flag:boolean=false;
  dialogSurvey:any=null;
  colored:boolean=true;

  dialogObject:any;
  displayedColumns: string[] = ['SurveyName', 'StartDate', 'EndDate'];
  constructor() { }

  ngOnInit(): void {
    if(typeof this.recived_table.SurveyPeriods == 'string')
    this.recived_table.SurveyPeriods=JSON.parse(this.recived_table.SurveyPeriods)
    
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
      this.select_table.emit(this.dialogSurvey);
     
}

}
