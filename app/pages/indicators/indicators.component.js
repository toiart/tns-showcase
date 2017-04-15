"use strict";
var core_1 = require("@angular/core");
var content_service_1 = require("../../common/services/content.service");
var IndicatorsPage = (function () {
    function IndicatorsPage(_contentService) {
        this._contentService = _contentService;
        this.styles = _contentService.getStyles();
        this.fontColors = _contentService.getFontColors();
    }
    return IndicatorsPage;
}());
IndicatorsPage = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sc-indicators-page',
        templateUrl: 'indicators.html',
        styleUrls: ['indicators.css']
    }),
    __metadata("design:paramtypes", [content_service_1.ContentService])
], IndicatorsPage);
exports.IndicatorsPage = IndicatorsPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kaWNhdG9ycy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRpY2F0b3JzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXdDO0FBQ3hDLHlFQUFxRTtBQVFyRSxJQUFhLGNBQWM7SUFLdkIsd0JBQTJCLGVBQStCO1FBQS9CLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUN0RCxJQUFJLENBQUMsTUFBTSxHQUFHLGVBQWUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUMxQyxJQUFJLENBQUMsVUFBVSxHQUFHLGVBQWUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN0RCxDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQUFDLEFBVEQsSUFTQztBQVRZLGNBQWM7SUFOMUIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsb0JBQW9CO1FBQzlCLFdBQVcsRUFBRSxpQkFBaUI7UUFDOUIsU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7S0FDaEMsQ0FBQztxQ0FNOEMsZ0NBQWM7R0FMakQsY0FBYyxDQVMxQjtBQVRZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb250ZW50U2VydmljZX0gZnJvbSAnLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbnRlbnQuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdzYy1pbmRpY2F0b3JzLXBhZ2UnLFxuICAgIHRlbXBsYXRlVXJsOiAnaW5kaWNhdG9ycy5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnaW5kaWNhdG9ycy5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBJbmRpY2F0b3JzUGFnZSB7XG5cbiAgICBwcml2YXRlIHN0eWxlczogYW55W107XG4gICAgcHJpdmF0ZSBmb250Q29sb3JzOiBhbnlbXTtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jb250ZW50U2VydmljZTogQ29udGVudFNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5zdHlsZXMgPSBfY29udGVudFNlcnZpY2UuZ2V0U3R5bGVzKCk7XG4gICAgICAgIHRoaXMuZm9udENvbG9ycyA9IF9jb250ZW50U2VydmljZS5nZXRGb250Q29sb3JzKCk7XG4gICAgfVxufVxuIl19