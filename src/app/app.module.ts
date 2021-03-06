import { NgModule ,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';
import {MatSelectModule} from '@angular/material/select';
import { CardListComponent } from './card-list/card-list.component';
import { CardItemComponent } from './card-list/card-item/card-item.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatRadioModule} from '@angular/material/radio';
import { DialogViewComponent } from './dialog-view/dialog-view.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatPaginatorModule} from '@angular/material/paginator';
import { TableItemComponent } from './card-list/table-item/table-item.component';
import{ServeyService}from'./servey.service';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ChangePWComponent } from './change-pw/change-pw.component';
import { PermissionsComponent } from './permissions/permissions.component';
import { DaterangePickerComponent } from './daterange-picker/daterange-picker.component';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import { FilterPipe } from './filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardListComponent,
    CardItemComponent,
    DialogViewComponent,
    TableItemComponent,
    ChangePWComponent,
    PermissionsComponent,
    DaterangePickerComponent,
    FilterPipe,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    HttpClientModule,
    MatSelectModule,
    MatTooltipModule,
    ReactiveFormsModule,
    MatTableModule,
    FormsModule,
    MatRadioModule,
    MatDialogModule,
    MatPaginatorModule,
    MatDatepickerModule,
    Ng2SearchPipeModule,
    MatNativeDateModule,
    MatInputModule
  ],
  providers: [HttpService , ServeyService],
  bootstrap: [AppComponent],


})
export class AppModule { }
