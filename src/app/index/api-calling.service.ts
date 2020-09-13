import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCallingService {

  private url = "https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${metric}&APPID=952d6b1a52fe15a7b901720074680562"

  constructor(private http: HttpClient) { }
  gettemp(){
    this.http.get(this.url).subscribe((data)=> console.log(data))
  }
}
