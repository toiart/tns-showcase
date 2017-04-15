"use strict";
var core_1 = require("@angular/core");
var ViewsPage = (function () {
    function ViewsPage() {
    }
    ViewsPage.prototype.ngAfterViewInit = function () {
        this.setNativeElements();
        this.setHtmlCode();
    };
    ViewsPage.prototype.setHtmlCode = function () {
        this.htmlView.html = this.htmlCode.text;
    };
    ViewsPage.prototype.setNativeElements = function () {
        this.htmlCode = this.htmlCodeRef.nativeElement;
        this.htmlView = this.htmlViewRef.nativeElement;
    };
    return ViewsPage;
}());
__decorate([
    core_1.ViewChild('htmlCode'),
    __metadata("design:type", core_1.ElementRef)
], ViewsPage.prototype, "htmlCodeRef", void 0);
__decorate([
    core_1.ViewChild('htmlView'),
    __metadata("design:type", core_1.ElementRef)
], ViewsPage.prototype, "htmlViewRef", void 0);
ViewsPage = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sc-views-page',
        templateUrl: 'views.html',
        styleUrls: ['views.css']
    })
], ViewsPage);
exports.ViewsPage = ViewsPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmlld3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBOEU7QUFROUUsSUFBYSxTQUFTO0lBQXRCO0lBc0JBLENBQUM7SUFkRyxtQ0FBZSxHQUFmO1FBQ0ksSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFTSwrQkFBVyxHQUFsQjtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO0lBQzVDLENBQUM7SUFFTyxxQ0FBaUIsR0FBekI7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDO1FBQy9DLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUM7SUFDbkQsQ0FBQztJQUVMLGdCQUFDO0FBQUQsQ0FBQyxBQXRCRCxJQXNCQztBQW5CMEI7SUFBdEIsZ0JBQVMsQ0FBQyxVQUFVLENBQUM7OEJBQXNCLGlCQUFVOzhDQUFDO0FBRWhDO0lBQXRCLGdCQUFTLENBQUMsVUFBVSxDQUFDOzhCQUFzQixpQkFBVTs4Q0FBQztBQUw5QyxTQUFTO0lBTnJCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLGVBQWU7UUFDekIsV0FBVyxFQUFFLFlBQVk7UUFDekIsU0FBUyxFQUFFLENBQUMsV0FBVyxDQUFDO0tBQzNCLENBQUM7R0FDVyxTQUFTLENBc0JyQjtBQXRCWSw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIEFmdGVyVmlld0luaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnc2Mtdmlld3MtcGFnZScsXG4gICAgdGVtcGxhdGVVcmw6ICd2aWV3cy5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsndmlld3MuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVmlld3NQYWdlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cblxuICAgIEBWaWV3Q2hpbGQoJ2h0bWxDb2RlJykgcHJpdmF0ZSBodG1sQ29kZVJlZjogRWxlbWVudFJlZjtcbiAgICBwcml2YXRlIGh0bWxDb2RlO1xuICAgIEBWaWV3Q2hpbGQoJ2h0bWxWaWV3JykgcHJpdmF0ZSBodG1sVmlld1JlZjogRWxlbWVudFJlZjtcbiAgICBwcml2YXRlIGh0bWxWaWV3O1xuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLnNldE5hdGl2ZUVsZW1lbnRzKCk7XG4gICAgICAgIHRoaXMuc2V0SHRtbENvZGUoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0SHRtbENvZGUoKSB7XG4gICAgICAgIHRoaXMuaHRtbFZpZXcuaHRtbCA9IHRoaXMuaHRtbENvZGUudGV4dDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldE5hdGl2ZUVsZW1lbnRzKCkge1xuICAgICAgICB0aGlzLmh0bWxDb2RlID0gdGhpcy5odG1sQ29kZVJlZi5uYXRpdmVFbGVtZW50O1xuICAgICAgICB0aGlzLmh0bWxWaWV3ID0gdGhpcy5odG1sVmlld1JlZi5uYXRpdmVFbGVtZW50O1xuICAgIH1cblxufVxuIl19