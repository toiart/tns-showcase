"use strict";
var core_1 = require("@angular/core");
// import cameraModule for accesing camera hardware
var cameraModule = require("camera");
var CameraPage = (function () {
    function CameraPage() {
        this.width = 0;
        this.height = 0;
        this.keepAspectRatio = false;
        this.widthEmitter = new core_1.EventEmitter();
        this.heightEmitter = new core_1.EventEmitter();
        this.keepAspectRatioEmitter = new core_1.EventEmitter();
    }
    //Opens camera module and passes the picture
    CameraPage.prototype.openCamera = function () {
        var _this = this;
        cameraModule.takePicture({ width: this.width, height: this.height, keepAspectRatio: this.keepAspectRatio }).then(function (picture) {
            _this.image.src = picture;
        });
    };
    //On page init it subscribes to EventEmitters that are emited by the UI
    CameraPage.prototype.ngOnInit = function () {
        var instance = this;
        this.widthEmitter
            .subscribe(function (v) {
            instance.width = v;
        });
        this.heightEmitter
            .subscribe(function (v) {
            instance.height = v;
        });
        this.keepAspectRatioEmitter
            .subscribe(function (v) {
            instance.keepAspectRatio = v;
        });
    };
    /* Get the elements from the UI */
    CameraPage.prototype.ngAfterViewInit = function () {
        this.image = this.imageRef.nativeElement;
    };
    return CameraPage;
}());
__decorate([
    core_1.ViewChild('image'),
    __metadata("design:type", core_1.ElementRef)
], CameraPage.prototype, "imageRef", void 0);
CameraPage = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sc-camera-page',
        templateUrl: 'camera.html',
        styleUrls: ['camera.css']
    }),
    __metadata("design:paramtypes", [])
], CameraPage);
exports.CameraPage = CameraPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FtZXJhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhbWVyYS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUFvRztBQUNwRyxtREFBbUQ7QUFDbkQscUNBQXdDO0FBUXhDLElBQWEsVUFBVTtJQVluQjtRQVZRLFVBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsV0FBTSxHQUFXLENBQUMsQ0FBQztRQUNuQixvQkFBZSxHQUFZLEtBQUssQ0FBQztRQUNqQyxpQkFBWSxHQUFHLElBQUksbUJBQVksRUFBVSxDQUFDO1FBQzFDLGtCQUFhLEdBQUcsSUFBSSxtQkFBWSxFQUFVLENBQUM7UUFDM0MsMkJBQXNCLEdBQUcsSUFBSSxtQkFBWSxFQUFXLENBQUM7SUFNN0QsQ0FBQztJQUNELDRDQUE0QztJQUNyQywrQkFBVSxHQUFqQjtRQUFBLGlCQUlDO1FBSEcsWUFBWSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxPQUFPO1lBQ3BILEtBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRCx1RUFBdUU7SUFDdkUsNkJBQVEsR0FBUjtRQUNJLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsWUFBWTthQUNaLFNBQVMsQ0FBQyxVQUFBLENBQUM7WUFDUixRQUFRLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztRQUNQLElBQUksQ0FBQyxhQUFhO2FBQ2IsU0FBUyxDQUFDLFVBQUEsQ0FBQztZQUNSLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsSUFBSSxDQUFDLHNCQUFzQjthQUN0QixTQUFTLENBQUMsVUFBQSxDQUFDO1lBQ1IsUUFBUSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBQ0Qsa0NBQWtDO0lBQ2xDLG9DQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDO0lBQzdDLENBQUM7SUFDTCxpQkFBQztBQUFELENBQUMsQUF4Q0QsSUF3Q0M7QUEvQnVCO0lBQW5CLGdCQUFTLENBQUMsT0FBTyxDQUFDOzhCQUFtQixpQkFBVTs0Q0FBQztBQVR4QyxVQUFVO0lBTnRCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLGdCQUFnQjtRQUMxQixXQUFXLEVBQUUsYUFBYTtRQUMxQixTQUFTLEVBQUUsQ0FBQyxZQUFZLENBQUM7S0FDNUIsQ0FBQzs7R0FDVyxVQUFVLENBd0N0QjtBQXhDWSxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgT25Jbml0LCBBZnRlclZpZXdJbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIGltcG9ydCBjYW1lcmFNb2R1bGUgZm9yIGFjY2VzaW5nIGNhbWVyYSBoYXJkd2FyZVxuaW1wb3J0IGNhbWVyYU1vZHVsZSA9IHJlcXVpcmUoJ2NhbWVyYScpO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnc2MtY2FtZXJhLXBhZ2UnLFxuICAgIHRlbXBsYXRlVXJsOiAnY2FtZXJhLmh0bWwnLFxuICAgIHN0eWxlVXJsczogWydjYW1lcmEuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2FtZXJhUGFnZSBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgICBwcml2YXRlIHdpZHRoOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgaGVpZ2h0OiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUga2VlcEFzcGVjdFJhdGlvOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSB3aWR0aEVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgICBwcml2YXRlIGhlaWdodEVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgICBwcml2YXRlIGtlZXBBc3BlY3RSYXRpb0VtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgICBAVmlld0NoaWxkKCdpbWFnZScpIHByaXZhdGUgaW1hZ2VSZWY6IEVsZW1lbnRSZWY7XG4gICAgcHJpdmF0ZSBpbWFnZTtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG4gICAgLy9PcGVucyBjYW1lcmEgbW9kdWxlIGFuZCBwYXNzZXMgdGhlIHBpY3R1cmVcbiAgICBwdWJsaWMgb3BlbkNhbWVyYSgpIHtcbiAgICAgICAgY2FtZXJhTW9kdWxlLnRha2VQaWN0dXJlKHsgd2lkdGg6IHRoaXMud2lkdGgsIGhlaWdodDogdGhpcy5oZWlnaHQsIGtlZXBBc3BlY3RSYXRpbzogdGhpcy5rZWVwQXNwZWN0UmF0aW8gfSkudGhlbihwaWN0dXJlID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW1hZ2Uuc3JjID0gcGljdHVyZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vT24gcGFnZSBpbml0IGl0IHN1YnNjcmliZXMgdG8gRXZlbnRFbWl0dGVycyB0aGF0IGFyZSBlbWl0ZWQgYnkgdGhlIFVJXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGxldCBpbnN0YW5jZSA9IHRoaXM7XG4gICAgICAgIHRoaXMud2lkdGhFbWl0dGVyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHYgPT4ge1xuICAgICAgICAgICAgICAgIGluc3RhbmNlLndpZHRoID0gdjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB0aGlzLmhlaWdodEVtaXR0ZXJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUodiA9PiB7XG4gICAgICAgICAgICAgICAgaW5zdGFuY2UuaGVpZ2h0ID0gdjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB0aGlzLmtlZXBBc3BlY3RSYXRpb0VtaXR0ZXJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUodiA9PiB7XG4gICAgICAgICAgICAgICAgaW5zdGFuY2Uua2VlcEFzcGVjdFJhdGlvID0gdjtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbiAgICAvKiBHZXQgdGhlIGVsZW1lbnRzIGZyb20gdGhlIFVJICovXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmltYWdlID0gdGhpcy5pbWFnZVJlZi5uYXRpdmVFbGVtZW50O1xuICAgIH1cbn1cbiJdfQ==