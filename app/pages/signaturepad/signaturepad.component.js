"use strict";
var core_1 = require("@angular/core");
/* IMPORTANT: registering DrawingPad UI component */
var element_registry_1 = require("nativescript-angular/element-registry");
element_registry_1.registerElement('DrawingPad', function () { return require('nativescript-drawingpad').DrawingPad; });
//import modules for saving the drawing
var imageSource = require("image-source");
var fs = require("file-system");
var enums = require("ui/enums");
var platform = require("platform");
//USING PLUGIN: NATIVESCRIPT-DRAWINGPAD
var SignaturePadPage = (function () {
    function SignaturePadPage() {
        this.isAndroid = platform.isAndroid;
        this.images = [];
    }
    SignaturePadPage.prototype.getDrawingAsPic = function () {
        var _this = this;
        // get the drawing of the drawingpad
        this.drawingPad.getDrawing().then(function (data) {
            console.log(data);
            _this.images.push(data);
        }, function (err) {
            console.log(err);
        });
    };
    SignaturePadPage.prototype.getNoBGDrawing = function () {
        var _this = this;
        // get the drawing with transparent background (only Android)
        this.drawingPad.getTransparentDrawing().then(function (data) {
            console.log(data);
            _this.images.push(data);
        }, function (err) {
            console.log(err);
        });
    };
    SignaturePadPage.prototype.clearUserDrawing = function () {
        this.drawingPad.clearDrawing();
    };
    //Save into a private folder, not accessible from Users/External apps
    SignaturePadPage.prototype.saveDrawing = function () {
        this.drawingPad.getDrawing().then(function (data) {
            console.log(data);
            var img = imageSource.fromNativeSource(data);
            var folder = fs.knownFolders.documents();
            var path = fs.path.join(folder.path, 'Test.png');
            var saved = img.saveToFile(path, enums.ImageFormat.png);
        }, function (err) {
            console.log(err);
        });
    };
    SignaturePadPage.prototype.ngAfterViewInit = function () {
        this.drawingPad = this.drawingPadRef.nativeElement;
    };
    return SignaturePadPage;
}());
__decorate([
    core_1.ViewChild('drawingPad'),
    __metadata("design:type", core_1.ElementRef)
], SignaturePadPage.prototype, "drawingPadRef", void 0);
SignaturePadPage = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sc-signature-pad-page',
        templateUrl: 'signaturepad.html',
        styleUrls: ['signaturepad.css']
    })
], SignaturePadPage);
exports.SignaturePadPage = SignaturePadPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmF0dXJlcGFkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpZ25hdHVyZXBhZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUE4RTtBQUM5RSxvREFBb0Q7QUFDcEQsMEVBQXNFO0FBQ3RFLGtDQUFlLENBQUMsWUFBWSxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMseUJBQXlCLENBQUMsQ0FBQyxVQUFVLEVBQTdDLENBQTZDLENBQUMsQ0FBQztBQUNuRix1Q0FBdUM7QUFDdkMsMENBQTZDO0FBQzdDLGdDQUFtQztBQUNuQyxnQ0FBbUM7QUFDbkMsbUNBQXNDO0FBRXRDLHVDQUF1QztBQVF2QyxJQUFhLGdCQUFnQjtJQU43QjtRQVFXLGNBQVMsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDO1FBQzlCLFdBQU0sR0FBVSxFQUFFLENBQUM7SUErQy9CLENBQUM7SUF6Q1UsMENBQWUsR0FBdEI7UUFBQSxpQkFRQztRQVBHLG9DQUFvQztRQUNwQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLElBQUk7WUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQixDQUFDLEVBQUUsVUFBQyxHQUFHO1lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSx5Q0FBYyxHQUFyQjtRQUFBLGlCQVFDO1FBUEcsNkRBQTZEO1FBQzdELElBQUksQ0FBQyxVQUFVLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxJQUFJO1lBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0IsQ0FBQyxFQUFFLFVBQUMsR0FBRztZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sMkNBQWdCLEdBQXZCO1FBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBQ0QscUVBQXFFO0lBQzlELHNDQUFXLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxJQUFJO1lBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEIsSUFBSSxHQUFHLEdBQUcsV0FBVyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzdDLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDekMsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQztZQUNqRCxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVELENBQUMsRUFBRSxVQUFDLEdBQUc7WUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELDBDQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDO0lBQ3ZELENBQUM7SUFHTCx1QkFBQztBQUFELENBQUMsQUFsREQsSUFrREM7QUE3QzRCO0lBQXhCLGdCQUFTLENBQUMsWUFBWSxDQUFDOzhCQUF3QixpQkFBVTt1REFBQztBQUxsRCxnQkFBZ0I7SUFONUIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsdUJBQXVCO1FBQ2pDLFdBQVcsRUFBRSxtQkFBbUI7UUFDaEMsU0FBUyxFQUFFLENBQUMsa0JBQWtCLENBQUM7S0FDbEMsQ0FBQztHQUNXLGdCQUFnQixDQWtENUI7QUFsRFksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vKiBJTVBPUlRBTlQ6IHJlZ2lzdGVyaW5nIERyYXdpbmdQYWQgVUkgY29tcG9uZW50ICovXG5pbXBvcnQge3JlZ2lzdGVyRWxlbWVudH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeSc7XG5yZWdpc3RlckVsZW1lbnQoJ0RyYXdpbmdQYWQnLCAoKSA9PiByZXF1aXJlKCduYXRpdmVzY3JpcHQtZHJhd2luZ3BhZCcpLkRyYXdpbmdQYWQpO1xuLy9pbXBvcnQgbW9kdWxlcyBmb3Igc2F2aW5nIHRoZSBkcmF3aW5nXG5pbXBvcnQgaW1hZ2VTb3VyY2UgPSByZXF1aXJlKCdpbWFnZS1zb3VyY2UnKTtcbmltcG9ydCBmcyA9IHJlcXVpcmUoJ2ZpbGUtc3lzdGVtJyk7XG5pbXBvcnQgZW51bXMgPSByZXF1aXJlKCd1aS9lbnVtcycpO1xuaW1wb3J0IHBsYXRmb3JtID0gcmVxdWlyZSgncGxhdGZvcm0nKTtcblxuLy9VU0lORyBQTFVHSU46IE5BVElWRVNDUklQVC1EUkFXSU5HUEFEXG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdzYy1zaWduYXR1cmUtcGFkLXBhZ2UnLFxuICAgIHRlbXBsYXRlVXJsOiAnc2lnbmF0dXJlcGFkLmh0bWwnLFxuICAgIHN0eWxlVXJsczogWydzaWduYXR1cmVwYWQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2lnbmF0dXJlUGFkUGFnZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG4gICAgcHVibGljIGlzQW5kcm9pZCA9IHBsYXRmb3JtLmlzQW5kcm9pZDtcbiAgICBwcml2YXRlIGltYWdlczogYW55W10gPSBbXTtcblxuICAgIEBWaWV3Q2hpbGQoJ2RyYXdpbmdQYWQnKSBwcml2YXRlIGRyYXdpbmdQYWRSZWY6IEVsZW1lbnRSZWY7XG4gICAgcHJpdmF0ZSBkcmF3aW5nUGFkO1xuXG5cbiAgICBwdWJsaWMgZ2V0RHJhd2luZ0FzUGljKCkge1xuICAgICAgICAvLyBnZXQgdGhlIGRyYXdpbmcgb2YgdGhlIGRyYXdpbmdwYWRcbiAgICAgICAgdGhpcy5kcmF3aW5nUGFkLmdldERyYXdpbmcoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VzLnB1c2goZGF0YSk7XG4gICAgICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXROb0JHRHJhd2luZygpIHtcbiAgICAgICAgLy8gZ2V0IHRoZSBkcmF3aW5nIHdpdGggdHJhbnNwYXJlbnQgYmFja2dyb3VuZCAob25seSBBbmRyb2lkKVxuICAgICAgICB0aGlzLmRyYXdpbmdQYWQuZ2V0VHJhbnNwYXJlbnREcmF3aW5nKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICB0aGlzLmltYWdlcy5wdXNoKGRhdGEpO1xuICAgICAgICB9LCAoZXJyKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xlYXJVc2VyRHJhd2luZygpIHtcbiAgICAgICAgdGhpcy5kcmF3aW5nUGFkLmNsZWFyRHJhd2luZygpO1xuICAgIH1cbiAgICAvL1NhdmUgaW50byBhIHByaXZhdGUgZm9sZGVyLCBub3QgYWNjZXNzaWJsZSBmcm9tIFVzZXJzL0V4dGVybmFsIGFwcHNcbiAgICBwdWJsaWMgc2F2ZURyYXdpbmcoKSB7XG4gICAgICAgIHRoaXMuZHJhd2luZ1BhZC5nZXREcmF3aW5nKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICB2YXIgaW1nID0gaW1hZ2VTb3VyY2UuZnJvbU5hdGl2ZVNvdXJjZShkYXRhKTtcbiAgICAgICAgICAgIHZhciBmb2xkZXIgPSBmcy5rbm93bkZvbGRlcnMuZG9jdW1lbnRzKCk7XG4gICAgICAgICAgICB2YXIgcGF0aCA9IGZzLnBhdGguam9pbihmb2xkZXIucGF0aCwgJ1Rlc3QucG5nJyk7XG4gICAgICAgICAgICB2YXIgc2F2ZWQgPSBpbWcuc2F2ZVRvRmlsZShwYXRoLCBlbnVtcy5JbWFnZUZvcm1hdC5wbmcpO1xuICAgICAgICB9LCAoZXJyKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuZHJhd2luZ1BhZCA9IHRoaXMuZHJhd2luZ1BhZFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIH1cblxuXG59XG4iXX0=