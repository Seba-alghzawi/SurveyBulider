import { Component, OnInit,AfterViewInit ,ViewChild} from '@angular/core';
import { HttpService } from '../http.service';
import { MatDialog ,MatDialogConfig} from '@angular/material/dialog';
import { DialogViewComponent } from '../dialog-view/dialog-view.component';
import { MatPaginator } from '@angular/material/paginator';
import {MatSort, Sort} from '@angular/material/sort';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.sass']
})

export class CardListComponent implements OnInit {
  flag:boolean=false;
  dialogSurvey:any=null;
  selectedUsers: any;
  dataRecived: any;
  dialogObject:any;
  selected: Date;
  serveyPeriods: Date;
  show: boolean = false;
  toggle_grid: string = "grid";
   dataSource: any;
   PublishedArray:any;//filtered published survey
   ExpiredArray:any;//filtered expired survey
   ClosedArray:any;//filtered closed survey
   AllSurveyArray:any;//filtered all survey
   
   @ViewChild('radioBtn')btn!: any;
  displayedColumns: string[] = ['SurveyName', 'StartDate', 'EndDate'];

  constructor(private service_http: HttpService,private dialog: MatDialog ,private _liveAnnouncer: LiveAnnouncer) { }
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
    dialogConfig.data =this.dialogObject.SurveyName
    this.dialog.open(DialogViewComponent, dialogConfig);

    }
    //grid

  changeView(item:string){
    this.toggle_grid=item;
    console.log(this.toggle_grid)
    }

    update(updatededVal:any)
    {
      this.dialogObject=updatededVal;
    }
     
    onChangetab(sevent:any) :any
    {
      if(sevent.tab.textLabel=="Published")
        {
          this.PublishedArray=this.dataRecived.filter((x:any) => x.SURVEY_STATUS_EN.includes('Published'))
          console.log(this.PublishedArray)
          
        }else if(sevent.tab.textLabel=="Expired")
        {
          this.ExpiredArray=this.dataRecived.filter((x:any) => x.SURVEY_STATUS_EN.includes('Expired'))
          console.log(this.ExpiredArray)
        }
        else if(sevent.tab.textLabel=="Closed")
        {
          this.ClosedArray=this.dataRecived.filter((x:any) => x.SURVEY_STATUS_EN.includes('Closed'))
          console.log(this.ClosedArray)
        }
    }

    onSearch(e: any){
      console.log(e)
    }

    SelectedSurvey(data:any,item:any){  
      this.btn=item.checked;
      if(this.flag==true){
          this.dialogSurvey=null;
          this.flag= !this.flag;
        }  
        else{
          this.dialogSurvey=data;
          this.flag= !this.flag;;
        }
        
    }
    
  }
