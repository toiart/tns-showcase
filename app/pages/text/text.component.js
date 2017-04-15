"use strict";
var core_1 = require("@angular/core");
var content_service_1 = require("../../common/services/content.service");
var page_1 = require("ui/page");
var TextPage = (function () {
    function TextPage(_contentService, page) {
        this._contentService = _contentService;
        this.page = page;
        this.styleSelected = 0;
        this.colorSelected = 0;
        this.style = 'light';
        this.rounded = false;
        this.colors = _contentService.getColors();
        this.opening = _contentService.getOpening();
        this.styles = _contentService.getStyles();
        this.textStyles = _contentService.getTextStyles();
    }
    TextPage.prototype.textFieldLoaded = function (args) {
        args.object.dismissSoftInput();
        if (args.object.ios) {
            args.object.ios.endEditing(true);
        }
        else if (args.object.android) {
            args.object.android.clearFocus();
        }
    };
    TextPage.prototype.switchChange = function (args) {
        this.rounded = !this.rounded;
    };
    TextPage.prototype.selectedIndexChanged = function (args) {
        this.styleSelected = args.object.selectedIndex;
    };
    TextPage.prototype.selectedColorChanged = function (args) {
        this.colorSelected = args.object.selectedIndex;
    };
    return TextPage;
}());
TextPage = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sc-text-page',
        templateUrl: 'text.html',
        styleUrls: ['text.css']
    }),
    __metadata("design:paramtypes", [content_service_1.ContentService, page_1.Page])
], TextPage);
exports.TextPage = TextPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0ZXh0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXdDO0FBQ3hDLHlFQUFxRTtBQUNyRSxnQ0FBNkI7QUFRN0IsSUFBYSxRQUFRO0lBV2pCLGtCQUEyQixlQUErQixFQUFVLElBQVU7UUFBbkQsb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQVR0RSxrQkFBYSxHQUFXLENBQUMsQ0FBQztRQUMxQixrQkFBYSxHQUFXLENBQUMsQ0FBQztRQUMxQixVQUFLLEdBQVcsT0FBTyxDQUFDO1FBS3hCLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFHN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxlQUFlLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDMUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxlQUFlLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDNUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxlQUFlLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDMUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxlQUFlLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdEQsQ0FBQztJQUVNLGtDQUFlLEdBQXRCLFVBQXVCLElBQUk7UUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQy9CLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDckMsQ0FBQztJQUNMLENBQUM7SUFFTSwrQkFBWSxHQUFuQixVQUFvQixJQUFJO1FBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ2pDLENBQUM7SUFFTSx1Q0FBb0IsR0FBM0IsVUFBNEIsSUFBSTtRQUM1QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO0lBQ25ELENBQUM7SUFFTSx1Q0FBb0IsR0FBM0IsVUFBNEIsSUFBSTtRQUM1QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO0lBQ25ELENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FBQyxBQXRDRCxJQXNDQztBQXRDWSxRQUFRO0lBTnBCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLGNBQWM7UUFDeEIsV0FBVyxFQUFFLFdBQVc7UUFDeEIsU0FBUyxFQUFFLENBQUMsVUFBVSxDQUFDO0tBQzFCLENBQUM7cUNBWThDLGdDQUFjLEVBQWdCLFdBQUk7R0FYckUsUUFBUSxDQXNDcEI7QUF0Q1ksNEJBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbnRlbnRTZXJ2aWNlfSBmcm9tICcuLi8uLi9jb21tb24vc2VydmljZXMvY29udGVudC5zZXJ2aWNlJztcbmltcG9ydCB7UGFnZX0gZnJvbSAndWkvcGFnZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdzYy10ZXh0LXBhZ2UnLFxuICAgIHRlbXBsYXRlVXJsOiAndGV4dC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsndGV4dC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUZXh0UGFnZSB7XG5cbiAgICBwcml2YXRlIHN0eWxlU2VsZWN0ZWQ6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBjb2xvclNlbGVjdGVkOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgc3R5bGU6IHN0cmluZyA9ICdsaWdodCc7XG4gICAgcHJpdmF0ZSB0ZXh0U3R5bGVzOiBhbnlbXTtcbiAgICBwcml2YXRlIHN0eWxlczogYW55W107XG4gICAgcHJpdmF0ZSBjb2xvcnM6IGFueVtdO1xuICAgIHByaXZhdGUgb3BlbmluZzogc3RyaW5nO1xuICAgIHByaXZhdGUgcm91bmRlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NvbnRlbnRTZXJ2aWNlOiBDb250ZW50U2VydmljZSwgcHJpdmF0ZSBwYWdlOiBQYWdlKSB7XG4gICAgICAgIHRoaXMuY29sb3JzID0gX2NvbnRlbnRTZXJ2aWNlLmdldENvbG9ycygpO1xuICAgICAgICB0aGlzLm9wZW5pbmcgPSBfY29udGVudFNlcnZpY2UuZ2V0T3BlbmluZygpO1xuICAgICAgICB0aGlzLnN0eWxlcyA9IF9jb250ZW50U2VydmljZS5nZXRTdHlsZXMoKTtcbiAgICAgICAgdGhpcy50ZXh0U3R5bGVzID0gX2NvbnRlbnRTZXJ2aWNlLmdldFRleHRTdHlsZXMoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdGV4dEZpZWxkTG9hZGVkKGFyZ3MpIHtcbiAgICAgICAgYXJncy5vYmplY3QuZGlzbWlzc1NvZnRJbnB1dCgpO1xuICAgICAgICBpZiAoYXJncy5vYmplY3QuaW9zKSB7XG4gICAgICAgICAgICBhcmdzLm9iamVjdC5pb3MuZW5kRWRpdGluZyh0cnVlKTtcbiAgICAgICAgfSBlbHNlIGlmIChhcmdzLm9iamVjdC5hbmRyb2lkKSB7XG4gICAgICAgICAgICBhcmdzLm9iamVjdC5hbmRyb2lkLmNsZWFyRm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzd2l0Y2hDaGFuZ2UoYXJncykge1xuICAgICAgICB0aGlzLnJvdW5kZWQgPSAhdGhpcy5yb3VuZGVkO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZWxlY3RlZEluZGV4Q2hhbmdlZChhcmdzKSB7XG4gICAgICAgIHRoaXMuc3R5bGVTZWxlY3RlZCA9IGFyZ3Mub2JqZWN0LnNlbGVjdGVkSW5kZXg7XG4gICAgfVxuXG4gICAgcHVibGljIHNlbGVjdGVkQ29sb3JDaGFuZ2VkKGFyZ3MpIHtcbiAgICAgICAgdGhpcy5jb2xvclNlbGVjdGVkID0gYXJncy5vYmplY3Quc2VsZWN0ZWRJbmRleDtcbiAgICB9XG59XG4iXX0=