import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EditService {

  constructor(private http: HttpClient) { }


  updateHealthQuotes(data){
    return this.http.post("https://www.quickbima.com/api/health-insurances/update-record.json ", data)
  }

}
