import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder ,FormGroup } from '@angular/forms'; 
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

reactiveForm!: FormGroup;
passwardPattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}";
registerArray:any={};

  constructor(private route:ActivatedRoute ,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      console.log(params)
    })
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
