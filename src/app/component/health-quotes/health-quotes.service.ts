import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HealthQuotesService {

  constructor(private http: HttpClient) { }


  
gethealthQuotes(data){
  return this.http.post("https://www.quickbima.com/api/health-insurances/get-quotes.json", data)
  
}

updateRecord(data){
return this.http.post("https://www.quickbima.com/api/health-insurances/update-record.json", data)
}

getProposal(url, data){
return this.http.post(url , data)
}

}