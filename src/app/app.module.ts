import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CurrencyConverterComponent } from './CurrencyConverter/CurrencyConverter.component';
import { CurrencyConverterService } from './CurrencyConverter/shared/CurrencyConverter.service';
import {HttpModule, Http, Headers, Response } from "@angular/http";
import { Ng2CompleterModule } from "ng2-completer";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CurrencyConverterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    Ng2CompleterModule,
    FormsModule
  ],
  providers: [CurrencyConverterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
