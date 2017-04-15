import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import { Retailer } from "./retailer";

@Injectable()
export class RetailerService {
    
    constructor(private http: Http) { }

    getRetailers(): Observable<any> {
        return this.http.get("http://589d8ea5400db4120026146d.mockapi.io/api/retailers")
        .map(res => res.json())
        .catch( err => {
            console.error("error")
            return Observable.throw(err);
        })
    }

}
