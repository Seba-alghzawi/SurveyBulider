import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }
  getData()
  {
    return this.http.get('https://mocki.io/v1/d44b9441-fb81-4745-b76b-0b1982a75bc1')
  }

  sendData()
  {
    
  }
}
