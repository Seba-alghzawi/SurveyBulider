import { Component, OnInit,AfterViewInit ,ViewChild} from '@angular/core';
import { HttpService } from '../http.service';
import { MatDialog ,MatDialogConfig} from '@angular/material/dialog';
import { DialogViewComponent } from '../dialog-view/dialog-view.component';
import { MatPaginator } from '@angular/material/paginator';
import {MatSort, Sort} from '@angular/material/sort';
import {LiveAnnouncer} from '@angular/cdk/a11y';
@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.sass']
})

export class CardListComponent implements OnInit {

  dataRecived: any;
  dialogObject:any;
  selected: Date;
  serveyPeriods: Date;
  show: boolean = false;
  toggle_grid: string = "grid";
  SourceData: any;
 
  displayedColumns: string[] = ['SurveyName', 'StartDate', 'EndDate'];

  constructor(private service_http: HttpService,private dialog: MatDialog ,private _liveAnnouncer: LiveAnnouncer) { }
  
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  ngOnInit() {
      this.service_http.getData().subscribe(data=>{
      this.dataRecived= (data as any)[0] || [];
      console.log( this.dataRecived)
      })
     this.dataRecived.paginator = this.paginator;
     
  }
    
  
  ngAfterViewInit() {
    this.dataRecived.paginator = this.paginator;
    this.dataRecived.sort = this.sort;
  }
  

  activateButton() {
    this.show = !this.show;
    console.log("hello");
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

    

  }
