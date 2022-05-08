import { Component, OnInit,AfterViewInit ,ViewChild} from '@angular/core';
import { HttpService } from '../http.service';
import { MatDialog ,MatDialogConfig} from '@angular/material/dialog';
import { DialogViewComponent } from '../dialog-view/dialog-view.component';
import { MatPaginator } from '@angular/material/paginator';
import {MatSort, Sort} from '@angular/material/sort';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { MatTableDataSource } from '@angular/material/table';
import{ServeyService}from'../servey.service';
import { FormGroup ,FormControl} from '@angular/forms';
import * as moment from 'moment';
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
   daterange:any;
   startD:any;
   endD:any;
   newdata2:any[]=[];
   newdata:any[]=[];
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
  
range = new FormGroup({
  start: new FormControl(),
  end: new FormControl(),
});


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
      if(this.dataRecived==undefined)
      return
      this.filteredArray=this.dataRecived.filter((x:any) => x.SURVEY_STATUS_EN.includes(sevent.tab.textLabel))


      // let startDate=new Date(this.startD);
      // let endDate=new Date(this.endD);
      // if(startDate && endDate )
      // {
      //   console.log(startDate && endDate)
      //   this.filteredArray=this.filteredArray.filter((item:any)=>startDate<item.SurveyPeriods.START_DATE && item.SurveyPeriods.END_DATE<endDate)
      // }
    }

    onSearch(event: Event){
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter= filterValue.trim().toLowerCase();
      console.log(this.dataSource)
    }


    start(){
    
      this.service_http.getData().subscribe(data=>{
        this.dataRecived= (data as any)[0] || [];
        console.log( this.dataRecived)
        this.dataSource = new MatTableDataSource(this.dataRecived);
        })
     
        
      console.log(this.startD)
    }
    end(){
      this.newdata=[];
      console.log(this.endD)
      if(this.endD||this.startD)
      {
        
        for(let item of this.dataRecived)
        {
          
          for(let period of item.SurveyPeriods)
          {
            if(moment(period.START_DATE).isAfter(moment(this.startD))&& moment(period.END_DATE).isBefore(this.endD))
            {
         
             {
              this.newdata.push(item);
              this.newdata = this.newdata.filter((value, index,self) => 
              self.findIndex((ele)=>['TEMPLATE_ID'].every(ele2=>ele.TEMPLATE_ID==value.TEMPLATE_ID))===index)
              console.log('catched');
             }
            
            }
           
          }
      
        }
        this.dataRecived=this.newdata;
        
        console.log(this.newdata2)
      }
    
      console.log(moment('2022-04-5').isAfter(moment(this.endD))&& moment('2022-04-1').isBefore(moment(this.endD)));
     
      // this.endD=new Date(this.endD)
      
      // console.log(typeof(this.endD))
    }


  
 
  

    
  }
