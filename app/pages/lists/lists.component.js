"use strict";
var core_1 = require("@angular/core");
var content_service_1 = require("../../common/services/content.service");
var colorModule = require("color");
var platform = require("platform");
var ListsPage = (function () {
    function ListsPage(_contentService) {
        this._contentService = _contentService;
        this.style = 'light';
        this.styleSelected = 0;
        this.colorSelected = 0;
        this.isAndroid = platform.isAndroid;
        this.colors = _contentService.getColors();
        this.films = _contentService.getFilms();
    }
    ListsPage.prototype.changeCellBackground = function (args) {
        if (!this.isAndroid) {
            var cell = args.ios; //return UITableViewCell
            cell.backgroundColor = new colorModule.Color('0,0,0,0').ios;
        }
    };
    ListsPage.prototype.selectedColorChanged = function (args) {
        this.colorSelected = args.object.selectedIndex;
    };
    return ListsPage;
}());
ListsPage = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sc-lists-page',
        templateUrl: 'lists.html',
        styleUrls: ['lists.css']
    }),
    __metadata("design:paramtypes", [content_service_1.ContentService])
], ListsPage);
exports.ListsPage = ListsPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGlzdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBd0M7QUFDeEMseUVBQXFFO0FBRXJFLG1DQUFzQztBQUN0QyxtQ0FBc0M7QUFRdEMsSUFBYSxTQUFTO0lBUWxCLG1CQUEyQixlQUErQjtRQUEvQixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFQbkQsVUFBSyxHQUFXLE9BQU8sQ0FBQztRQUN4QixrQkFBYSxHQUFXLENBQUMsQ0FBQztRQUN6QixrQkFBYSxHQUFXLENBQUMsQ0FBQztRQUcxQixjQUFTLEdBQVksUUFBUSxDQUFDLFNBQVMsQ0FBQztRQUc1QyxJQUFJLENBQUMsTUFBTSxHQUFHLGVBQWUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUMxQyxJQUFJLENBQUMsS0FBSyxHQUFHLGVBQWUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM1QyxDQUFDO0lBRU0sd0NBQW9CLEdBQTNCLFVBQTRCLElBQUk7UUFDNUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNsQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsd0JBQXdCO1lBQzdDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNoRSxDQUFDO0lBQ0wsQ0FBQztJQUVNLHdDQUFvQixHQUEzQixVQUE0QixJQUFJO1FBQzVCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7SUFDbkQsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0FBQyxBQXZCRCxJQXVCQztBQXZCWSxTQUFTO0lBTnJCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLGVBQWU7UUFDekIsV0FBVyxFQUFFLFlBQVk7UUFDekIsU0FBUyxFQUFFLENBQUMsV0FBVyxDQUFDO0tBQzNCLENBQUM7cUNBUzhDLGdDQUFjO0dBUmpELFNBQVMsQ0F1QnJCO0FBdkJZLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb250ZW50U2VydmljZX0gZnJvbSAnLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbnRlbnQuc2VydmljZSc7XG5cbmltcG9ydCBjb2xvck1vZHVsZSA9IHJlcXVpcmUoJ2NvbG9yJyk7XG5pbXBvcnQgcGxhdGZvcm0gPSByZXF1aXJlKCdwbGF0Zm9ybScpO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnc2MtbGlzdHMtcGFnZScsXG4gICAgdGVtcGxhdGVVcmw6ICdsaXN0cy5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnbGlzdHMuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTGlzdHNQYWdlIHtcbiAgICBwdWJsaWMgc3R5bGU6IHN0cmluZyA9ICdsaWdodCc7XG4gICAgcHVibGljIHN0eWxlU2VsZWN0ZWQ6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBjb2xvclNlbGVjdGVkOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgY29sb3JzOiBhbnlbXTtcbiAgICBwcml2YXRlIGZpbG1zOiBhbnlbXTtcbiAgICBwcml2YXRlIGlzQW5kcm9pZDogYm9vbGVhbiA9IHBsYXRmb3JtLmlzQW5kcm9pZDtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jb250ZW50U2VydmljZTogQ29udGVudFNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5jb2xvcnMgPSBfY29udGVudFNlcnZpY2UuZ2V0Q29sb3JzKCk7XG4gICAgICAgIHRoaXMuZmlsbXMgPSBfY29udGVudFNlcnZpY2UuZ2V0RmlsbXMoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2hhbmdlQ2VsbEJhY2tncm91bmQoYXJncykge1xuICAgICAgICBpZiAoIXRoaXMuaXNBbmRyb2lkKSB7XG4gICAgICAgICAgICB2YXIgY2VsbCA9IGFyZ3MuaW9zOyAvL3JldHVybiBVSVRhYmxlVmlld0NlbGxcbiAgICAgICAgICAgIGNlbGwuYmFja2dyb3VuZENvbG9yID0gbmV3IGNvbG9yTW9kdWxlLkNvbG9yKCcwLDAsMCwwJykuaW9zO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHNlbGVjdGVkQ29sb3JDaGFuZ2VkKGFyZ3MpIHtcbiAgICAgICAgdGhpcy5jb2xvclNlbGVjdGVkID0gYXJncy5vYmplY3Quc2VsZWN0ZWRJbmRleDtcbiAgICB9XG59XG4iXX0=