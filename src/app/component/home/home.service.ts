import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) {
    //   var headers = new HttpHeaders();
    // headers = headers.set('Content-Type', 'application/json');
    // headers = headers.set('Access-Control-Allow-Origin' , '*');
  }


  // url1 = "https://google.com/"
  url = "https://www.quickbima.com/api/health-insurances/add.json"
  // url1 = "https://google.com/";
  // geturl (){
  //   var headers = new HttpHeaders();
  //     headers = headers.set('Content-Type', 'application/json');
  //     headers = headers.set('Access-Control-Allow-Origin' , 'http://localhost:4200');
  //     console.log(headers)
  //     return this.http.get(this.url1)
  // }

  gethealthPage(obj) {


    return this.http.post(this.url, obj);


  }

  gethealthQuotes(data) {
    // var headers = new HttpHeaders();
    // headers = headers.append('Content-Type', 'application/json');
    // headers = headers.append('Access-Control-Allow-Origin' , '*');
    return this.http.post("https://www.quickbima.com/api/health-insurances/get-quotes.json", data)
  }


}