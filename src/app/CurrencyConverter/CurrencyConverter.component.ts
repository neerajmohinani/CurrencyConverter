import { Component ,ViewEncapsulation ,ChangeDetectorRef} from '@angular/core';
import { CurrencyConverterService  } from './shared/CurrencyConverter.service';
import { CompleterService, CompleterData } from 'ng2-completer';


@Component({
  selector: 'currency-converter',
  templateUrl: './currencyConverter.template.html',
  styleUrls: ["./currencyConverter.style.css"], 
  //encapsulation: ViewEncapsulation.Native, 
})
export class CurrencyConverterComponent  {
     fromCurrency : String;
     toCurrency: String;
     sourceAmount : Number;
     convertedAmount : any;
     completerDataService: CompleterData;
     completionData:any;
     completiondata:any;
     constructor(private _ChdRef:ChangeDetectorRef,private _currencyConverterService: CurrencyConverterService, private completerService: CompleterService){
      this._currencyConverterService.getAllCurrencyCodes().subscribe(
      result => {
        this.completionData=JSON.parse(result);
        console.log(JSON.stringify(this.completionData));
        this.completerDataService = completerService.local(this.completionData,'currency,currencyCode','currencyCode').descriptionField("currency");

      }
     );
      this.completiondata=[
       { currencyCode:"U.S. Dollar" , currency:"USD"},
       { currencyCode:"Indian Rupees" , currency:"INR"},
       { currencyCode:"Pakistan Rupees" , currency:"PKR"},
       { currencyCode:"Euro" , currency:"EUR"}
     ];
     console.log(JSON.stringify(this.completiondata));
      
     }
     changeConvertedAmount(event){
         this.convertedAmount="";
         this._ChdRef.detectChanges();
         console.log("ds");
         console.log(event);
      if(this.sourceAmount  && this.isValid(this.toCurrency,"toCurrency") && this.isValid(this.fromCurrency,"fromCurrency")){
         this.convertedAmount="Loading...";
         this._ChdRef.detectChanges();
          this._currencyConverterService.getConvertedAmount(this.fromCurrency,this.toCurrency,this.sourceAmount).subscribe(
            result => {

                this.convertedAmount=result;
                console.log(result);
                if(this.convertedAmount > 999999999999999 || this.convertedAmount < -999999999999999){
                  this.convertedAmount = "Out Of Range";
                }
            }
          );
        }
        else{
          console.log(""+this.sourceAmount + this.toCurrency  + this.fromCurrency );
        }
     }
       isValid(currencyCode,type):boolean{
        var res:Array<any>;
        res = this.completionData.filter(function(current){
          return current.currencyCode == currencyCode;
        });
        
        
        if(res.length!=1){ 
             this.convertedAmount="Invalid Currency Input";
        }
       
        return res.length ==1;
     }
    }
