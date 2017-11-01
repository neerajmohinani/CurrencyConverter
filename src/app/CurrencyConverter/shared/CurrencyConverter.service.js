"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/Rx");
var rxjs_1 = require("rxjs");
var CurrencyConverterService = (function () {
    function CurrencyConverterService(_http) {
        this._http = _http;
        this._currencyConverterURL = window.location.hostname + "/CurrencyConverter/currency/";
    }
    CurrencyConverterService.prototype.getConvertedAmount = function (fromCurrency, toCurrency, amount) {
        return this._http.get(this._currencyConverterURL + "/" + fromCurrency + "/" + toCurrency + "/" + amount)
            .map(function (response) {
            {
                return response.text;
            }
            ;
        })
            .catch(function (error) { return rxjs_1.Observable.throw(error.json()); });
    };
    CurrencyConverterService.prototype.getAllCurrencyCodes = function () {
        return this._http.get(this._currencyConverterURL + "/all/")
            .map(function (response) {
            {
                return response.text;
            }
            ;
        })
            .catch(function (error) { return rxjs_1.Observable.throw(error.json()); });
    };
    return CurrencyConverterService;
}());
CurrencyConverterService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], CurrencyConverterService);
exports.CurrencyConverterService = CurrencyConverterService;
//# sourceMappingURL=CurrencyConverter.service.js.map