import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';  
import { APP_CONFIG,AppConfig } from '../app-config.module';
import { LoginRequest } from '../model/loginrequest';
import { Paymentdetails } from '../model/paymentdetail';
import { PayCancel } from '../model/PayCancelResponce';

import { AllPayments } from '../model/allPayments';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PaystraxServiceService {

  constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig) { }
  
  url = this.config.apiBaseUrl;

  login(email: string, password: string): Observable<LoginRequest> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      withCredentials: true
    };
    const data = JSON.stringify({ 'email': email,
    'password': password})
   
    return this.http.post<LoginRequest>(this.url + 'api/auth/login', data, httpOptions)

  }

  CreateRequest(token : string = "",reason:string,fromAddress:string,toAddress:string,amount:number,expiry:Date){
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json','Authorization': 'Bearer '+token }),
      withCredentials: true
    };

    var data = JSON.stringify({
      'reason': reason,
      'fromAddress': fromAddress,
      'toAddress':toAddress,
      'amount':amount,
      'expiry':expiry
    });

    return this.http.post(this.url + 'api/payment-request/create', data, httpOptions)
  }

  GetAllRequests(token : string): Observable<AllPayments>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json','Authorization': 'Bearer '+token }),
      withCredentials: true
    };

    return this.http.get<AllPayments>(this.url + 'api/payment-request/get-all', httpOptions)
  }

  GetPaymentRequest(token : string = "",paymentGuid:string): Observable<Paymentdetails>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json','Authorization': 'Bearer '+token }),
      withCredentials: true
    };

    return this.http.get<Paymentdetails>(this.url + 'api/payment-request/'+ paymentGuid, httpOptions)
  }

  GetUserBalance(token : string): Observable<AllPayments>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json','Authorization': 'Bearer '+token }),
      withCredentials: true
    };

    return this.http.get<AllPayments>(this.url + '/api/payment-request/get-balance', httpOptions)
  }

  CancelPaymentRequest(token : string = "",paymentGuid : string): Observable<PayCancel> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json','Authorization': 'Bearer '+token }),
      withCredentials: true
    };
    const formData = new FormData();
    return this.http.put<PayCancel>(this.url + 'api/payment-request/'+paymentGuid+'/cancel',formData, httpOptions)
  }

  PaynowRequest(token : string = "",paymentGuid : string): Observable<PayCancel> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json','Authorization': 'Bearer '+token }),
      withCredentials: true
    };
    const formData = new FormData();
    return this.http.put<PayCancel>(this.url + 'api/payment-request/'+paymentGuid+'/pay',formData, httpOptions)
  }

}
