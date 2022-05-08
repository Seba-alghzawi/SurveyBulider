import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterDate'
})
export class FilterPipe implements PipeTransform {

  transform(value: any,startDate:Date,endDate:Date): any {
    startDate=new Date(startDate);
    endDate=new Date(endDate);
    // value=new Date(value)
    const Data=[];
     
     if(value==undefined)
     {
      return
     }
     
     else{
      // console.log(value);
      for(const val of value )
      {
        if(val.SurveyPeriods?.length==1)
        {
          console.log('length=1');
          if(val.SurveyPeriods.START_DATE>startDate && val.SurveyPeriods.END_DATE<endDate)
          {
            Data.push(val);
            console.log(Data)
            return Data;
          }
        }
        else{
          console.log('length>1');
         let periodsArray= val.SurveyPeriods.filter((x:any)=>x.START_DATE<startDate && x.END_DATE<endDate)
         if(periodsArray?.length>0)
         {
          Data.push(val);
          console.log(periodsArray)
            return Data;
         }
        
        }
      
       }
        // for(const date of val.SurveyPeriods){
        //   if(startDate<date.START_DATE && date.END_DATE<endDate)
        //   {
        //     return val;
        //   }
        // }
        
      
      }
    // return (value.length==0 || startDate==null) ? value :
    //  value.filter((data:any)=> startDate<data.SurveyPeriods.START_DATE
    // && data.SurveyPeriods.END_DATE<endDate)
    
  }

}
