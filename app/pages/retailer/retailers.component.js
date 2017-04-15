"use strict";
var core_1 = require("@angular/core");
var retailer_service_1 = require("./retailer.service");
var RetailersComponent = (function () {
    function RetailersComponent(retailerService) {
        this.retailerService = retailerService;
    }
    RetailersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.retailerService.getRetailers()
            .subscribe(function (res) {
            _this.retailers = res.data;
        });
    };
    return RetailersComponent;
}());
RetailersComponent = __decorate([
    core_1.Component({
        selector: "ns-retailers",
        moduleId: module.id,
        templateUrl: "./retailers.component.html",
    }),
    __metadata("design:paramtypes", [retailer_service_1.RetailerService])
], RetailersComponent);
exports.RetailersComponent = RetailersComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV0YWlsZXJzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJldGFpbGVycy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUFrRDtBQUdsRCx1REFBcUQ7QUFPckQsSUFBYSxrQkFBa0I7SUFHM0IsNEJBQW9CLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtJQUFJLENBQUM7SUFFekQscUNBQVEsR0FBUjtRQUFBLGlCQUtDO1FBSkcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUU7YUFDbEMsU0FBUyxDQUFDLFVBQUEsR0FBRztZQUNWLEtBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTCx5QkFBQztBQUFELENBQUMsQUFYRCxJQVdDO0FBWFksa0JBQWtCO0lBTDlCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsY0FBYztRQUN4QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLDRCQUE0QjtLQUM1QyxDQUFDO3FDQUl1QyxrQ0FBZTtHQUgzQyxrQkFBa0IsQ0FXOUI7QUFYWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IFJldGFpbGVyIH0gZnJvbSBcIi4vcmV0YWlsZXJcIjtcbmltcG9ydCB7IFJldGFpbGVyU2VydmljZSB9IGZyb20gXCIuL3JldGFpbGVyLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtcmV0YWlsZXJzXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3JldGFpbGVycy5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBSZXRhaWxlcnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgcmV0YWlsZXJzOiBhbnk7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZXRhaWxlclNlcnZpY2U6IFJldGFpbGVyU2VydmljZSkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZXRhaWxlclNlcnZpY2UuZ2V0UmV0YWlsZXJzKClcbiAgICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZXRhaWxlcnMgPSByZXMuZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19