"use strict";
var core_1 = require("@angular/core");
var content_service_1 = require("../../common/services/content.service");
var ButtonsPage = (function () {
    function ButtonsPage(_contentService) {
        this._contentService = _contentService;
        this.styleSelected = 0;
        this.rounded = false;
        this.styles = _contentService.getStyles();
    }
    //Switch between default and round buttons
    ButtonsPage.prototype.switchChange = function (args) {
        this.rounded = !this.rounded;
    };
    //Changes tyle selected
    ButtonsPage.prototype.selectedIndexChanged = function (args) {
        this.styleSelected = args.object.selectedIndex;
    };
    return ButtonsPage;
}());
ButtonsPage = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sc-buttons-page',
        templateUrl: 'buttons.html',
        styleUrls: ['buttons.css']
    }),
    __metadata("design:paramtypes", [content_service_1.ContentService])
], ButtonsPage);
exports.ButtonsPage = ButtonsPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJidXR0b25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXdDO0FBQ3hDLHlFQUFxRTtBQVFyRSxJQUFhLFdBQVc7SUFLcEIscUJBQTJCLGVBQStCO1FBQS9CLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUpsRCxrQkFBYSxHQUFXLENBQUMsQ0FBQztRQUUxQixZQUFPLEdBQVksS0FBSyxDQUFDO1FBRzdCLElBQUksQ0FBQyxNQUFNLEdBQUcsZUFBZSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQzlDLENBQUM7SUFDRCwwQ0FBMEM7SUFDbkMsa0NBQVksR0FBbkIsVUFBb0IsSUFBSTtRQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNqQyxDQUFDO0lBQ0QsdUJBQXVCO0lBQ2hCLDBDQUFvQixHQUEzQixVQUE0QixJQUFJO1FBQzVCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7SUFDbkQsQ0FBQztJQUVMLGtCQUFDO0FBQUQsQ0FBQyxBQWpCRCxJQWlCQztBQWpCWSxXQUFXO0lBTnZCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLGlCQUFpQjtRQUMzQixXQUFXLEVBQUUsY0FBYztRQUMzQixTQUFTLEVBQUUsQ0FBQyxhQUFhLENBQUM7S0FDN0IsQ0FBQztxQ0FNOEMsZ0NBQWM7R0FMakQsV0FBVyxDQWlCdkI7QUFqQlksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbnRlbnRTZXJ2aWNlfSBmcm9tICcuLi8uLi9jb21tb24vc2VydmljZXMvY29udGVudC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ3NjLWJ1dHRvbnMtcGFnZScsXG4gICAgdGVtcGxhdGVVcmw6ICdidXR0b25zLmh0bWwnLFxuICAgIHN0eWxlVXJsczogWydidXR0b25zLmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbnNQYWdlIHtcbiAgICBwcml2YXRlIHN0eWxlU2VsZWN0ZWQ6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBzdHlsZXM6IGFueVtdO1xuICAgIHByaXZhdGUgcm91bmRlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NvbnRlbnRTZXJ2aWNlOiBDb250ZW50U2VydmljZSkge1xuICAgICAgICB0aGlzLnN0eWxlcyA9IF9jb250ZW50U2VydmljZS5nZXRTdHlsZXMoKTtcbiAgICB9XG4gICAgLy9Td2l0Y2ggYmV0d2VlbiBkZWZhdWx0IGFuZCByb3VuZCBidXR0b25zXG4gICAgcHVibGljIHN3aXRjaENoYW5nZShhcmdzKSB7XG4gICAgICAgIHRoaXMucm91bmRlZCA9ICF0aGlzLnJvdW5kZWQ7XG4gICAgfVxuICAgIC8vQ2hhbmdlcyB0eWxlIHNlbGVjdGVkXG4gICAgcHVibGljIHNlbGVjdGVkSW5kZXhDaGFuZ2VkKGFyZ3MpIHtcbiAgICAgICAgdGhpcy5zdHlsZVNlbGVjdGVkID0gYXJncy5vYmplY3Quc2VsZWN0ZWRJbmRleDtcbiAgICB9XG5cbn1cbiJdfQ==