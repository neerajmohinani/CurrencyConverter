import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";

@Injectable()
export class CurrencyConverterService{
    private _currencyConverterURL :String;

    constructor(private _http:Http){ 
        this._currencyConverterURL = "http://" + window.location.hostname + ":8080/CurrencyConverter/currency"
    }

    getConvertedAmount(fromCurrency:String, toCurrency:String, amount:Number) {
       
        return this._http.get(this._currencyConverterURL + "/" + fromCurrency + "/" + toCurrency + "/" + amount)
            .map(response => {
                // If request fails, throw an Error that will be caught
                if(response.status < 200 || response.status >= 300 || response.json().code >200 || response.json().code >= 300 ) {
                     throw new Error('This request has failed status:' + response.status +"code:"+ response.json().code);
                } 
                else
                { return response.json() };
            })
            .catch(error => Observable.throw(error));
        
    }
    getAllCurrencyCodes(){
        return this._http.get(this._currencyConverterURL + "/all/" )
            .map(response => {
                { return response.json() };
            })
            .catch(error => Observable.throw(error.json()));
          
    }
}