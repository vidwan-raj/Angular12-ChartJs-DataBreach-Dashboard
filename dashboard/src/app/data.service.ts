import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  stateValue: String = '';
  setStateValue(val:String){
    this.stateValue = val;
  }

  getStateValue(){
    return this.stateValue;
  }

  private API_SERVER = " http://localhost:4000";
  constructor(private httpClient : HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  } 

  public getRequest(){
    return this.httpClient.get(this.API_SERVER + '/getDataBreachDetails');
  }

  public getBreachTypeByState(State: String){
    const body = { "State" : State};
    return this.httpClient.post(this.API_SERVER + '/getBreachTypeByState', JSON.stringify(body),this.httpOptions);
  }

  public getYOYByStateAndBreachType(State: String, TypeOfBreach: String){
    const body = { "State" : State , "TypeOfBreach" : TypeOfBreach};
    return this.httpClient.post(this.API_SERVER + '/getYOYByStateAndBreachType', JSON.stringify(body),this.httpOptions);
  }
}
