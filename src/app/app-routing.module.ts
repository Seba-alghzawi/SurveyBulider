import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardListComponent } from './card-list/card-list.component';
import { ChangePWComponent } from './change-pw/change-pw.component';
import { PermissionsComponent } from './permissions/permissions.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:'', component:  CardListComponent},
  {path:'changePW', component: ChangePWComponent},
  {path:'permission', component: PermissionsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
