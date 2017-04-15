"use strict";
var core_1 = require("@angular/core");
var content_service_1 = require("../../common/services/content.service");
var SelectorsPage = (function () {
    function SelectorsPage(_contentService) {
        this._contentService = _contentService;
        this.styles = _contentService.getStyles();
    }
    return SelectorsPage;
}());
SelectorsPage = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sc-selectors-page',
        templateUrl: 'selectors.html',
        styleUrls: ['selectors.css']
    }),
    __metadata("design:paramtypes", [content_service_1.ContentService])
], SelectorsPage);
exports.SelectorsPage = SelectorsPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0b3JzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlbGVjdG9ycy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF3QztBQUN4Qyx5RUFBcUU7QUFRckUsSUFBYSxhQUFhO0lBSXRCLHVCQUEyQixlQUErQjtRQUEvQixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFDdEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxlQUFlLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDOUMsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FBQyxBQVBELElBT0M7QUFQWSxhQUFhO0lBTnpCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLG1CQUFtQjtRQUM3QixXQUFXLEVBQUUsZ0JBQWdCO1FBQzdCLFNBQVMsRUFBRSxDQUFDLGVBQWUsQ0FBQztLQUMvQixDQUFDO3FDQUs4QyxnQ0FBYztHQUpqRCxhQUFhLENBT3pCO0FBUFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbnRlbnRTZXJ2aWNlfSBmcm9tICcuLi8uLi9jb21tb24vc2VydmljZXMvY29udGVudC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ3NjLXNlbGVjdG9ycy1wYWdlJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3NlbGVjdG9ycy5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnc2VsZWN0b3JzLmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdG9yc1BhZ2Uge1xuXG4gICAgcHJpdmF0ZSBzdHlsZXM6IGFueVtdO1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NvbnRlbnRTZXJ2aWNlOiBDb250ZW50U2VydmljZSkge1xuICAgICAgICB0aGlzLnN0eWxlcyA9IF9jb250ZW50U2VydmljZS5nZXRTdHlsZXMoKTtcbiAgICB9XG59XG4iXX0=