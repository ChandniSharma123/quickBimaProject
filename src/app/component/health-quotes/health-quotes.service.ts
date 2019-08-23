import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HealthQuotesService {

  constructor(private http: HttpClient) { }



  gethealthQuotes(data) {
    var headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post("https://www.quickbima.com/api/health-insurances/get-quotes.json", data, { headers: headers })

  }

  updateRecord(data) {
    var headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post("https://www.quickbima.com/api/health-insurances/update-record.json", data, { headers: headers })
  }

  getProposal(url, data) {
    var headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(url, data, { headers: headers })
  }

}