"use strict";
var core_1 = require("@angular/core");
//USING PLUGIN: NATIVESCRIPT-ACCELEROMETER
var accelerometer = require("nativescript-accelerometer");
var AccelerometerPage = (function () {
    function AccelerometerPage(_ngZone) {
        this._ngZone = _ngZone;
        this.isAccelerometerActive = false;
        this.axisData = JSON.parse('{"x": 0, "y": 0, "z": 0}');
    }
    /* Starts accelerometer updates, returns data = {"x": x, "y": y, "z": z}
       Using ngZone for executing work inside the Angular zone
    */
    AccelerometerPage.prototype.toggleAccelerometer = function () {
        var _this = this;
        if (this.isAccelerometerActive) {
            accelerometer.stopAccelerometerUpdates();
        }
        else {
            accelerometer.startAccelerometerUpdates(function (data) {
                _this._ngZone.run(function () {
                    _this.axisData = data;
                });
            });
        }
        this.isAccelerometerActive = !this.isAccelerometerActive;
    };
    return AccelerometerPage;
}());
AccelerometerPage = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sc-accelerometer-page',
        templateUrl: 'accelerometer.html',
        styleUrls: ['accelerometer.css']
    }),
    __metadata("design:paramtypes", [core_1.NgZone])
], AccelerometerPage);
exports.AccelerometerPage = AccelerometerPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZWxlcm9tZXRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhY2NlbGVyb21ldGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQWdEO0FBQ2hELDBDQUEwQztBQUMxQywwREFBNkQ7QUFRN0QsSUFBYSxpQkFBaUI7SUFLMUIsMkJBQTJCLE9BQWU7UUFBZixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBRmxDLDBCQUFxQixHQUFZLEtBQUssQ0FBQztRQUczQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBQ0Q7O01BRUU7SUFDSywrQ0FBbUIsR0FBMUI7UUFBQSxpQkFZQztRQVhHLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7WUFDNUIsYUFBYSxDQUFDLHdCQUF3QixFQUFFLENBQUM7UUFDN0MsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osYUFBYSxDQUFDLHlCQUF5QixDQUN2QyxVQUFDLElBQUk7Z0JBQ0QsS0FBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7b0JBQ2IsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBQ3pCLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO1FBQ0QsSUFBSSxDQUFDLHFCQUFxQixHQUFHLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDO0lBQzdELENBQUM7SUFFTCx3QkFBQztBQUFELENBQUMsQUF6QkQsSUF5QkM7QUF6QlksaUJBQWlCO0lBTjdCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLHVCQUF1QjtRQUNqQyxXQUFXLEVBQUUsb0JBQW9CO1FBQ2pDLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO0tBQ25DLENBQUM7cUNBTXNDLGFBQU07R0FMakMsaUJBQWlCLENBeUI3QjtBQXpCWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgTmdab25lfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vVVNJTkcgUExVR0lOOiBOQVRJVkVTQ1JJUFQtQUNDRUxFUk9NRVRFUlxuaW1wb3J0IGFjY2VsZXJvbWV0ZXIgPSByZXF1aXJlKCduYXRpdmVzY3JpcHQtYWNjZWxlcm9tZXRlcicpO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnc2MtYWNjZWxlcm9tZXRlci1wYWdlJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2FjY2VsZXJvbWV0ZXIuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ2FjY2VsZXJvbWV0ZXIuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQWNjZWxlcm9tZXRlclBhZ2Uge1xuXG4gICAgcHJpdmF0ZSBheGlzRGF0YTogSlNPTjtcbiAgICBwcml2YXRlIGlzQWNjZWxlcm9tZXRlckFjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgX25nWm9uZTogTmdab25lKSB7XG4gICAgICAgIHRoaXMuYXhpc0RhdGEgPSBKU09OLnBhcnNlKCd7XCJ4XCI6IDAsIFwieVwiOiAwLCBcInpcIjogMH0nKTtcbiAgICB9XG4gICAgLyogU3RhcnRzIGFjY2VsZXJvbWV0ZXIgdXBkYXRlcywgcmV0dXJucyBkYXRhID0ge1wieFwiOiB4LCBcInlcIjogeSwgXCJ6XCI6IHp9XG4gICAgICAgVXNpbmcgbmdab25lIGZvciBleGVjdXRpbmcgd29yayBpbnNpZGUgdGhlIEFuZ3VsYXIgem9uZVxuICAgICovXG4gICAgcHVibGljIHRvZ2dsZUFjY2VsZXJvbWV0ZXIoKSB7XG4gICAgICAgIGlmKHRoaXMuaXNBY2NlbGVyb21ldGVyQWN0aXZlKSB7XG4gICAgICAgICAgICBhY2NlbGVyb21ldGVyLnN0b3BBY2NlbGVyb21ldGVyVXBkYXRlcygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWNjZWxlcm9tZXRlci5zdGFydEFjY2VsZXJvbWV0ZXJVcGRhdGVzKFxuICAgICAgICAgICAgKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5heGlzRGF0YSA9IGRhdGE7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzQWNjZWxlcm9tZXRlckFjdGl2ZSA9ICF0aGlzLmlzQWNjZWxlcm9tZXRlckFjdGl2ZTtcbiAgICB9XG5cbn1cbiJdfQ==