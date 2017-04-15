import { Component, OnInit } from "@angular/core";

import { Retailer } from "./retailer";
import { RetailerService } from "./retailer.service";

@Component({
    selector: "ns-retailers",
    moduleId: module.id,
    templateUrl: "./retailers.component.html",
})
export class RetailersComponent implements OnInit {

    retailers: any;
    constructor(private retailerService: RetailerService) { }

    ngOnInit(): void {
        this.retailerService.getRetailers()
        .subscribe(res => {
            this.retailers = res.data;
        });
    }
}
