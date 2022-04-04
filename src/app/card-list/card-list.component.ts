import { Component, OnInit,AfterViewInit ,ViewChild} from '@angular/core';
import { HttpService } from '../http.service';
import { MatDialog ,MatDialogConfig} from '@angular/material/dialog';
import { DialogViewComponent } from '../dialog-view/dialog-view.component';
import { MatPaginator } from '@angular/material/paginator';
import {MatSort, Sort} from '@angular/material/sort';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { MatTableDataSource } from '@angular/material/table';
import{ServeyService}from'../servey.service';
@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.sass']
})

export class CardListComponent implements OnInit {
  term:string="";
  flag:boolean=false;
  dialogSurvey:any=null;
  dataRecived: any;
  dialogObject:any;
  serveyPeriods: Date;
  show: boolean = false;
  toggle_grid: string = "grid";
   dataSource: any;
   filteredArray:any
   search_value:any;
   searchResult:any;
   @ViewChild('radioBtn')btn!: any;
  displayedColumns: string[] = ['SurveyName', 'StartDate', 'EndDate'];

  constructor(private service_http: HttpService,private dialog: MatDialog ,public survey_service :ServeyService) { }
  ngOnInit() {
    this.service_http.getData().subscribe(data=>{
    this.dataRecived= (data as any)[0] || [];
    console.log( this.dataRecived)
    this.dataSource = new MatTableDataSource(this.dataRecived);
    })

}
  



  ngAfterViewInit() {

  }
  

  cardsView(selected: string) {
    console.log(this.dataRecived)
    this.toggle_grid = selected;
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = this.dialogObject.SurveyName
    this.dialog.open(DialogViewComponent, dialogConfig);
    

    }
    //grid

    update(updatededVal:any)
    {
     
      if(updatededVal.TEMPLATE_ID==this.survey_service.cardselected_id)
      {
        
        this.survey_service.cardselected_id = null
      }
      else{
        this.survey_service.cardselected_id = updatededVal.TEMPLATE_ID
      }
      this.dialogObject=updatededVal;

      console.log(this.dialogObject);
    }
     

    onChangetab(sevent:any) :any
    {
      this.filteredArray=this.dataRecived.filter((x:any) => x.SURVEY_STATUS_EN.includes(sevent.tab.textLabel))
    }

    onSearch(event: Event){
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter= filterValue.trim().toLowerCase();
      console.log(this.dataSource)
    }


   


    
  }
