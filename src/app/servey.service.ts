import { Injectable  } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServeyService {
cardselected_id=null;
  constructor() { }

  SelectedCard(data:any)
  {
    this.cardselected_id=data;
  }


}
