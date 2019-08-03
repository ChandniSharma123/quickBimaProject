import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class proposalService {
  
  constructor(private http: HttpClient) { }

  url = "https://www.quickbima.com/api/health-insurances/add.json"



getProposalQuotes(data){
  return this.http.post("https://www.quickbima.com/api/health-insurances/get-quotes.json", data)
}


}