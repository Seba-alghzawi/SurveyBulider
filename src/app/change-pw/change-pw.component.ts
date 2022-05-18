import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmailValidator, FormBuilder ,FormGroup, RequiredValidator } from '@angular/forms'; 
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-change-pw',
  templateUrl: './change-pw.component.html',
  styleUrls: ['./change-pw.component.sass']
})
export class ChangePWComponent implements OnInit {
displayFlag=false;
lowercaseletter:boolean=false;
uppercaseletter :boolean=false;
num:boolean=false;
leng:boolean=false;
emailFlag:boolean=false;
phoneFlag:boolean=false;
valueSelected:any;

reactiveForm!: FormGroup;
passwardPattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}";
registerArray:any={};

  constructor(private route:ActivatedRoute ,private fb:FormBuilder) {
    
  
   }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
     this.reactiveForm=this.fb.group({
       radio:[''],
       email:[''],
       phone:['']
     }
     )
     this.reactiveForm.get('radio')?.valueChanges.subscribe(value=>{
      this.valueSelected = value;
     })

    })
  }
   
  radiocheacked()
  {
    if(this.valueSelected  =='email')
    {
      this.reactiveForm.get('email')?.setValidators(Validators.required);
      this.reactiveForm.get('phone')?.clearValidators();
    }
    if(this.valueSelected  =='phone')
    {
      this.reactiveForm.get('email')?.clearValidators();
      this.reactiveForm.get('phone')?.setValidators(Validators.required);
    }


  }


  submited()
  {
    console.log(this.reactiveForm.value);
  }

  onfocus () {
    this.displayFlag=!this.displayFlag;
  }
  
  test(val:any)
  {

    const lowerCaseLetters = /[a-z]/g;
    const upperCaseLetters = /[A-Z]/g;
    const  numbers = /[0-9]/g;
    if(lowerCaseLetters.test(val))
    {  
    this.lowercaseletter=true
    } 
    else{
      this.lowercaseletter=false;
    }


    if((upperCaseLetters).test(val))
    {
      this.uppercaseletter=true
    }
    else{
      this.uppercaseletter=false;
    }

    if((numbers).test(val))
    {
        this.num=true;
    }
    else{
      this.num=false;
    }

    if(val.length >= 8)
    {
      this.leng=true
    }
    else{
      this.leng=false;
    }

    
  }


  
 

}


