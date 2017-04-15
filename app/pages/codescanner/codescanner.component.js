"use strict";
var core_1 = require("@angular/core");
//USING PLUGIN: NATIVESCRIPT-BARCODESCANNER
var barcodescanner = require('nativescript-barcodescanner');
var CodeScannerPage = (function () {
    function CodeScannerPage() {
    }
    //Opens camera and scans the code
    CodeScannerPage.prototype.scan = function (format) {
        var _this = this;
        if (barcodescanner.available()) {
            barcodescanner.scan({
                formats: format,
                cancelLabel: 'Stop scanning',
                message: 'Go scan something',
                preferFrontCamera: false,
                showFlipCameraButton: true,
                orientation: 'portrait' // Android only, optionally lock the orientation to either "portrait" or "landscape" 
            }).then(function (result) {
                console.log('Scan format: ' + result.format);
                console.log('Scan text:   ' + result.text);
                _this.result = result.format + ' ' + result.text;
            }, function (error) {
                console.log('No scan: ' + error);
            });
        }
    };
    return CodeScannerPage;
}());
CodeScannerPage = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sc-code-scanner-page',
        templateUrl: 'codescanner.html',
        styleUrls: ['codescanner.css']
    })
], CodeScannerPage);
exports.CodeScannerPage = CodeScannerPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZXNjYW5uZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29kZXNjYW5uZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBd0M7QUFFeEMsMkNBQTJDO0FBQzNDLElBQUksY0FBYyxHQUFHLE9BQU8sQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO0FBUTVELElBQWEsZUFBZTtJQUE1QjtJQTJCQSxDQUFDO0lBdkJHLGlDQUFpQztJQUMxQiw4QkFBSSxHQUFYLFVBQVksTUFBYztRQUExQixpQkFvQkM7UUFuQkcsRUFBRSxDQUFDLENBQUMsY0FBYyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM3QixjQUFjLENBQUMsSUFBSSxDQUFDO2dCQUNoQixPQUFPLEVBQUUsTUFBTTtnQkFDZixXQUFXLEVBQUUsZUFBZTtnQkFDNUIsT0FBTyxFQUFFLG1CQUFtQjtnQkFDNUIsaUJBQWlCLEVBQUUsS0FBSztnQkFDeEIsb0JBQW9CLEVBQUUsSUFBSTtnQkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBTSxxRkFBcUY7YUFDckgsQ0FBQyxDQUFDLElBQUksQ0FDSCxVQUFDLE1BQU07Z0JBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzNDLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNwRCxDQUFDLEVBQ0QsVUFBQyxLQUFLO2dCQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxDQUFDO1lBQ3JDLENBQUMsQ0FDSixDQUFDO1FBQ04sQ0FBQztJQUNMLENBQUM7SUFFTCxzQkFBQztBQUFELENBQUMsQUEzQkQsSUEyQkM7QUEzQlksZUFBZTtJQU4zQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxzQkFBc0I7UUFDaEMsV0FBVyxFQUFFLGtCQUFrQjtRQUMvQixTQUFTLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztLQUNqQyxDQUFDO0dBQ1csZUFBZSxDQTJCM0I7QUEzQlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vVVNJTkcgUExVR0lOOiBOQVRJVkVTQ1JJUFQtQkFSQ09ERVNDQU5ORVJcbnZhciBiYXJjb2Rlc2Nhbm5lciA9IHJlcXVpcmUoJ25hdGl2ZXNjcmlwdC1iYXJjb2Rlc2Nhbm5lcicpO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnc2MtY29kZS1zY2FubmVyLXBhZ2UnLFxuICAgIHRlbXBsYXRlVXJsOiAnY29kZXNjYW5uZXIuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ2NvZGVzY2FubmVyLmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIENvZGVTY2FubmVyUGFnZSB7XG5cbiAgICBwcml2YXRlIHJlc3VsdDtcblxuICAgIC8vT3BlbnMgY2FtZXJhIGFuZCBzY2FucyB0aGUgY29kZVxuICAgIHB1YmxpYyBzY2FuKGZvcm1hdD86c3RyaW5nKSB7XG4gICAgICAgIGlmIChiYXJjb2Rlc2Nhbm5lci5hdmFpbGFibGUoKSkge1xuICAgICAgICAgICAgYmFyY29kZXNjYW5uZXIuc2Nhbih7XG4gICAgICAgICAgICAgICAgZm9ybWF0czogZm9ybWF0LCAgIC8vIFBhc3MgaW4gb2YgeW91IHdhbnQgdG8gcmVzdHJpY3Qgc2Nhbm5pbmcgdG8gY2VydGFpbiB0eXBlczsgQVpURUMgYW5kIE1BWElDT0RFIGZvcm1hdHMgZG9udCB3b3JrIGZpbmUgXG4gICAgICAgICAgICAgICAgY2FuY2VsTGFiZWw6ICdTdG9wIHNjYW5uaW5nJywgLy8gaU9TIG9ubHksIGRlZmF1bHQgJ0Nsb3NlJyBcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnR28gc2NhbiBzb21ldGhpbmcnLCAvLyBBbmRyb2lkIG9ubHksIGRlZmF1bHQgaXMgJ1BsYWNlIGEgYmFyY29kZSBpbnNpZGUgdGhlIHZpZXdmaW5kZXIgcmVjdGFuZ2xlIHRvIHNjYW4gaXQuJyBcbiAgICAgICAgICAgICAgICBwcmVmZXJGcm9udENhbWVyYTogZmFsc2UsICAgICAvLyBBbmRyb2lkIG9ubHksIGRlZmF1bHQgZmFsc2UgXG4gICAgICAgICAgICAgICAgc2hvd0ZsaXBDYW1lcmFCdXR0b246IHRydWUsICAgLy8gQW5kcm9pZCBvbmx5LCBkZWZhdWx0IGZhbHNlIChvbiBpT1MgaXQncyBhbHdheXMgYXZhaWxhYmxlKSBcbiAgICAgICAgICAgICAgICBvcmllbnRhdGlvbjogJ3BvcnRyYWl0JyAgICAgIC8vIEFuZHJvaWQgb25seSwgb3B0aW9uYWxseSBsb2NrIHRoZSBvcmllbnRhdGlvbiB0byBlaXRoZXIgXCJwb3J0cmFpdFwiIG9yIFwibGFuZHNjYXBlXCIgXG4gICAgICAgICAgICB9KS50aGVuKFxuICAgICAgICAgICAgICAgIChyZXN1bHQpPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU2NhbiBmb3JtYXQ6ICcgKyByZXN1bHQuZm9ybWF0KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1NjYW4gdGV4dDogICAnICsgcmVzdWx0LnRleHQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc3VsdCA9IHJlc3VsdC5mb3JtYXQgKyAnICcgKyByZXN1bHQudGV4dDtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIChlcnJvcik9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdObyBzY2FuOiAnICsgZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiJdfQ==