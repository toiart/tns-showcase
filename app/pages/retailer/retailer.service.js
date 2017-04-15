"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/switchMap");
require("rxjs/add/operator/catch");
var RetailerService = (function () {
    function RetailerService(http) {
        this.http = http;
    }
    RetailerService.prototype.getRetailers = function () {
        return this.http.get("http://589d8ea5400db4120026146d.mockapi.io/api/retailers")
            .map(function (res) { return res.json(); })
            .catch(function (err) {
            console.error("error");
            return Observable_1.Observable.throw(err);
        });
    };
    return RetailerService;
}());
RetailerService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], RetailerService);
exports.RetailerService = RetailerService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV0YWlsZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJldGFpbGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEyQztBQUMzQyxzQ0FBcUM7QUFDckMsOENBQTZDO0FBQzdDLGlDQUErQjtBQUMvQix1Q0FBcUM7QUFDckMsbUNBQWlDO0FBSWpDLElBQWEsZUFBZTtJQUV4Qix5QkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07SUFBSSxDQUFDO0lBRW5DLHNDQUFZLEdBQVo7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsMERBQTBELENBQUM7YUFDL0UsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUN0QixLQUFLLENBQUUsVUFBQSxHQUFHO1lBQ1AsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQTtZQUN0QixNQUFNLENBQUMsdUJBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUwsc0JBQUM7QUFBRCxDQUFDLEFBYkQsSUFhQztBQWJZLGVBQWU7SUFEM0IsaUJBQVUsRUFBRTtxQ0FHaUIsV0FBSTtHQUZyQixlQUFlLENBYTNCO0FBYlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHAgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3Ivc3dpdGNoTWFwJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnO1xuaW1wb3J0IHsgUmV0YWlsZXIgfSBmcm9tIFwiLi9yZXRhaWxlclwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUmV0YWlsZXJTZXJ2aWNlIHtcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHsgfVxuXG4gICAgZ2V0UmV0YWlsZXJzKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KFwiaHR0cDovLzU4OWQ4ZWE1NDAwZGI0MTIwMDI2MTQ2ZC5tb2NrYXBpLmlvL2FwaS9yZXRhaWxlcnNcIilcbiAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgLmNhdGNoKCBlcnIgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcImVycm9yXCIpXG4gICAgICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnIpO1xuICAgICAgICB9KVxuICAgIH1cblxufVxuIl19