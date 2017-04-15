"use strict";
var core_1 = require("@angular/core");
var AnimationsPage = (function () {
    function AnimationsPage() {
    }
    AnimationsPage.prototype.ngAfterViewInit = function () {
        this.setNativeElements();
    };
    AnimationsPage.prototype.startAnimations = function () {
        this.background.className = 's-margin app-color-primary changeBackground';
        this.opacity.className = 's-margin app-color-primary changeOpacity';
        this.translation.className = 's-margin app-color-primary simpleTranslate';
        this.scale.className = 's-margin app-color-primary scale';
        this.rotation.className = 's-margin app-color-primary loopRotate';
    };
    AnimationsPage.prototype.setNativeElements = function () {
        this.background = this.backgroundRef.nativeElement;
        this.opacity = this.opacityRef.nativeElement;
        this.translation = this.translationRef.nativeElement;
        this.scale = this.scaleRef.nativeElement;
        this.rotation = this.rotationRef.nativeElement;
    };
    return AnimationsPage;
}());
__decorate([
    core_1.ViewChild('background'),
    __metadata("design:type", core_1.ElementRef)
], AnimationsPage.prototype, "backgroundRef", void 0);
__decorate([
    core_1.ViewChild('opacity'),
    __metadata("design:type", core_1.ElementRef)
], AnimationsPage.prototype, "opacityRef", void 0);
__decorate([
    core_1.ViewChild('translation'),
    __metadata("design:type", core_1.ElementRef)
], AnimationsPage.prototype, "translationRef", void 0);
__decorate([
    core_1.ViewChild('scale'),
    __metadata("design:type", core_1.ElementRef)
], AnimationsPage.prototype, "scaleRef", void 0);
__decorate([
    core_1.ViewChild('rotation'),
    __metadata("design:type", core_1.ElementRef)
], AnimationsPage.prototype, "rotationRef", void 0);
AnimationsPage = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sc-animations-page',
        templateUrl: 'animations.html',
        styleUrls: ['animations.css']
    })
], AnimationsPage);
exports.AnimationsPage = AnimationsPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5pbWF0aW9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbmltYXRpb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQThFO0FBUTlFLElBQWEsY0FBYztJQUEzQjtJQWlDQSxDQUFDO0lBcEJHLHdDQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsd0NBQWUsR0FBZjtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLDZDQUE2QyxDQUFDO1FBQzFFLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLDBDQUEwQyxDQUFDO1FBQ3BFLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxHQUFHLDRDQUE0QyxDQUFDO1FBQzFFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLGtDQUFrQyxDQUFDO1FBQzFELElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLHVDQUF1QyxDQUFDO0lBQ3RFLENBQUM7SUFFTywwQ0FBaUIsR0FBekI7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDO1FBQ25ELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7UUFDN0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQztRQUNyRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUM7SUFDbkQsQ0FBQztJQUVMLHFCQUFDO0FBQUQsQ0FBQyxBQWpDRCxJQWlDQztBQS9CNEI7SUFBeEIsZ0JBQVMsQ0FBQyxZQUFZLENBQUM7OEJBQXdCLGlCQUFVO3FEQUFDO0FBRXJDO0lBQXJCLGdCQUFTLENBQUMsU0FBUyxDQUFDOzhCQUFxQixpQkFBVTtrREFBQztBQUUzQjtJQUF6QixnQkFBUyxDQUFDLGFBQWEsQ0FBQzs4QkFBeUIsaUJBQVU7c0RBQUM7QUFFekM7SUFBbkIsZ0JBQVMsQ0FBQyxPQUFPLENBQUM7OEJBQW1CLGlCQUFVO2dEQUFDO0FBRTFCO0lBQXRCLGdCQUFTLENBQUMsVUFBVSxDQUFDOzhCQUFzQixpQkFBVTttREFBQztBQVY5QyxjQUFjO0lBTjFCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLG9CQUFvQjtRQUM5QixXQUFXLEVBQUUsaUJBQWlCO1FBQzlCLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixDQUFDO0tBQ2hDLENBQUM7R0FDVyxjQUFjLENBaUMxQjtBQWpDWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIEFmdGVyVmlld0luaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnc2MtYW5pbWF0aW9ucy1wYWdlJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2FuaW1hdGlvbnMuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ2FuaW1hdGlvbnMuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQW5pbWF0aW9uc1BhZ2UgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuICAgIEBWaWV3Q2hpbGQoJ2JhY2tncm91bmQnKSBwcml2YXRlIGJhY2tncm91bmRSZWY6IEVsZW1lbnRSZWY7XG4gICAgcHJpdmF0ZSBiYWNrZ3JvdW5kO1xuICAgIEBWaWV3Q2hpbGQoJ29wYWNpdHknKSBwcml2YXRlIG9wYWNpdHlSZWY6IEVsZW1lbnRSZWY7XG4gICAgcHJpdmF0ZSBvcGFjaXR5O1xuICAgIEBWaWV3Q2hpbGQoJ3RyYW5zbGF0aW9uJykgcHJpdmF0ZSB0cmFuc2xhdGlvblJlZjogRWxlbWVudFJlZjtcbiAgICBwcml2YXRlIHRyYW5zbGF0aW9uO1xuICAgIEBWaWV3Q2hpbGQoJ3NjYWxlJykgcHJpdmF0ZSBzY2FsZVJlZjogRWxlbWVudFJlZjtcbiAgICBwcml2YXRlIHNjYWxlO1xuICAgIEBWaWV3Q2hpbGQoJ3JvdGF0aW9uJykgcHJpdmF0ZSByb3RhdGlvblJlZjogRWxlbWVudFJlZjtcbiAgICBwcml2YXRlIHJvdGF0aW9uO1xuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLnNldE5hdGl2ZUVsZW1lbnRzKCk7XG4gICAgfVxuXG4gICAgc3RhcnRBbmltYXRpb25zKCkge1xuICAgICAgICB0aGlzLmJhY2tncm91bmQuY2xhc3NOYW1lID0gJ3MtbWFyZ2luIGFwcC1jb2xvci1wcmltYXJ5IGNoYW5nZUJhY2tncm91bmQnO1xuICAgICAgICB0aGlzLm9wYWNpdHkuY2xhc3NOYW1lID0gJ3MtbWFyZ2luIGFwcC1jb2xvci1wcmltYXJ5IGNoYW5nZU9wYWNpdHknO1xuICAgICAgICB0aGlzLnRyYW5zbGF0aW9uLmNsYXNzTmFtZSA9ICdzLW1hcmdpbiBhcHAtY29sb3ItcHJpbWFyeSBzaW1wbGVUcmFuc2xhdGUnO1xuICAgICAgICB0aGlzLnNjYWxlLmNsYXNzTmFtZSA9ICdzLW1hcmdpbiBhcHAtY29sb3ItcHJpbWFyeSBzY2FsZSc7XG4gICAgICAgIHRoaXMucm90YXRpb24uY2xhc3NOYW1lID0gJ3MtbWFyZ2luIGFwcC1jb2xvci1wcmltYXJ5IGxvb3BSb3RhdGUnO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0TmF0aXZlRWxlbWVudHMoKSB7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZCA9IHRoaXMuYmFja2dyb3VuZFJlZi5uYXRpdmVFbGVtZW50O1xuICAgICAgICB0aGlzLm9wYWNpdHkgPSB0aGlzLm9wYWNpdHlSZWYubmF0aXZlRWxlbWVudDtcbiAgICAgICAgdGhpcy50cmFuc2xhdGlvbiA9IHRoaXMudHJhbnNsYXRpb25SZWYubmF0aXZlRWxlbWVudDtcbiAgICAgICAgdGhpcy5zY2FsZSA9IHRoaXMuc2NhbGVSZWYubmF0aXZlRWxlbWVudDtcbiAgICAgICAgdGhpcy5yb3RhdGlvbiA9IHRoaXMucm90YXRpb25SZWYubmF0aXZlRWxlbWVudDtcbiAgICB9XG5cbn1cbiJdfQ==