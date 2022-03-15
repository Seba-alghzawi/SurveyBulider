import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }
  getData()
  {
    return this.http.get('https://mocki.io/v1/b9f8560e-8d4f-4c00-9c6c-2d1e3f9797f0')
  }

  sendData()
  {
    
  }
}
