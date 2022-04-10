import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.sass']
})
export class PermissionsComponent implements OnInit {


  RecivedPermission:any;
  reactiveform:FormGroup;
  constructor(private perm:HttpService,private fb :FormBuilder) { }
      
  ngOnInit(): void {
    this.perm.getPermissions().subscribe(data=>{
      this.RecivedPermission=data;
      console.log(data);

      this.reactiveform=this.fb.group({
        radio:new  FormControl(""),
        userName:new FormControl(""),
        readOnly:new FormControl(""),
        none:new FormControl(""),
        read_write:new FormControl(""),
        checkbox:new FormControl("")
      
      })
    })
  }

}
