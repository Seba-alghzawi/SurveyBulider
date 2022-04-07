import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog ,MatDialogConfig} from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { HttpService } from '../../http.service'
import{ServeyService}from'../../servey.service';


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
  constructor(public survey_service :ServeyService) { }

  ngOnInit(): void {
    if(typeof this.recived_table?.SurveyPeriods == 'string')
    this.recived_table.SurveyPeriods=JSON.parse(this.recived_table.SurveyPeriods)
    
  }



  SelectedSurvey(){  
      this.select_table.emit(this.recived_table);
     
}

}
