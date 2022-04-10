import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient,private per:HttpClient ) { }
  getData()
  {
    return this.http.get('https://mocki.io/v1/b9f8560e-8d4f-4c00-9c6c-2d1e3f9797f0')
  }

  getPermissions( )
  {
    return this.per.get('https://mocki.io/v1/14387ef7-eef1-4f22-88cd-ec9f9001d47a')
  }
}
