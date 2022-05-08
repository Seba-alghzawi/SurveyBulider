import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { FormArray, FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.sass']
})
export class PermissionsComponent implements OnInit {

  users = [
    { id: 1, name: "Yaman" , system: "Call Center"},
    { id: 4, name: "Talha" , system: "Web Link"},
    { id: 5, name: "Maher" , system: "Email"},
    { id: 2, name: "Omar", system: "Email"},
    { id: 3, name: "Ahmad" , system: "Call Center"},
    { id: 5, name: "Maher" , system: "Call Center"},
    { id: 7, name: "Khalid" , system: "Web Link"},
    { id: 8, name: "Osama" , system: "Web Link"},
    { id: 6, name: "Mahmoud" , system: "Call Center"},
    { id: 2, name: "Omar", system: "Call Center"}
  ];
 contact={
   firstname:'seba',
   lastname:'alghzawi',
   contacts:[{email:'',number:''}]
  };
 form:FormGroup=this.fb.group({
   firstName:this.contact.firstname,
   lastName:this.contact.lastname,
   contacts:this.buildContacts(this.contact.contacts)
 })

  ReceivedPermission:any;
  reactiveform:FormGroup;
  arr1:FormArray;
  flag:boolean=false;
  flag2:boolean=false;
  flag3:boolean=false;
  
  read_write:string="read_write";
  readOnly:string="readOnly";
  none:string="none";

  constructor(private perm:HttpService,private fb :FormBuilder) { }
      
  ngOnInit(): void {
    this.perm.getPermissions().subscribe(data=>{
      this.ReceivedPermission=data;
      console.log(data);
      console.log(this.ReceivedPermission.length);
    
        this.t.push(this.fb.group({
            radio: ['none', Validators.required],
            checkbox: ['']
        }));

        this.users.forEach(el=>{
          this.addContactField(el.name);
         })
    

    })
      this.reactiveform=this.fb.group({
        userName:new FormControl(""),
        formArr:new FormArray([])
      })
    
  }
  
    get f() { return this.reactiveform.controls; }
    get t() { return this.f['formArr'] as FormArray; }
    get dataFormGroups() { return this.t.controls as FormGroup[]; }
    




    
    get contacts(): FormArray {
      return this.form.get('contacts') as FormArray;
    }

    buildContacts( contacts:{email:string,number:string}[]=[])
    {
      return this.fb.array(contacts.map(contact => this.fb.group(contact)));
    }

    addContactField(username:string) {
      this.contacts.push(this.fb.group({number:username, email: null}))
   }

   submit(value: any): void {
     console.log(value)
   }





    onclick1(x:any)
    {
      if(x==this.read_write)
      {
        this.flag=true;
      }
      else
      {
        this.flag=false;
      }
    }
    
    seba(X:any)
    {

        if(X.target.value=="read_write")
        {
          this.flag=true;
          console.log(X.target.value);
                  console.log(X.target.id);

      
        }
        else{
          this.flag=false;
          console.log(X.target.value+'false');
          console.log(X.target.id);
        }
    }

}




 


