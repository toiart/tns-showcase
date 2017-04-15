"use strict";
var core_1 = require("@angular/core");
var content_service_1 = require("../../common/services/content.service");
//USING PLUGIN: NATIVESCRIPT-THEMES
var themes = require('nativescript-themes');
var SettingsPage = (function () {
    function SettingsPage(_contentService) {
        this._contentService = _contentService;
        this.themes = _contentService.getThemes();
    }
    SettingsPage.prototype.applyTheme = function (theme) {
        themes.applyTheme(theme);
    };
    return SettingsPage;
}());
SettingsPage = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sc-settings-page',
        templateUrl: 'settings.html',
        styleUrls: ['settings.css']
    }),
    __metadata("design:paramtypes", [content_service_1.ContentService])
], SettingsPage);
exports.SettingsPage = SettingsPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2V0dGluZ3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBd0M7QUFDeEMseUVBQXFFO0FBRXJFLG1DQUFtQztBQUNuQyxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQVE1QyxJQUFhLFlBQVk7SUFJckIsc0JBQW9CLGVBQStCO1FBQS9CLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUMvQyxJQUFJLENBQUMsTUFBTSxHQUFHLGVBQWUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUM5QyxDQUFDO0lBRU0saUNBQVUsR0FBakIsVUFBa0IsS0FBYTtRQUMzQixNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFDTCxtQkFBQztBQUFELENBQUMsQUFYRCxJQVdDO0FBWFksWUFBWTtJQU54QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxrQkFBa0I7UUFDNUIsV0FBVyxFQUFFLGVBQWU7UUFDNUIsU0FBUyxFQUFFLENBQUMsY0FBYyxDQUFDO0tBQzlCLENBQUM7cUNBS3VDLGdDQUFjO0dBSjFDLFlBQVksQ0FXeEI7QUFYWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29udGVudFNlcnZpY2V9IGZyb20gJy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9jb250ZW50LnNlcnZpY2UnO1xuXG4vL1VTSU5HIFBMVUdJTjogTkFUSVZFU0NSSVBULVRIRU1FU1xudmFyIHRoZW1lcyA9IHJlcXVpcmUoJ25hdGl2ZXNjcmlwdC10aGVtZXMnKTtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ3NjLXNldHRpbmdzLXBhZ2UnLFxuICAgIHRlbXBsYXRlVXJsOiAnc2V0dGluZ3MuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ3NldHRpbmdzLmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNldHRpbmdzUGFnZSB7XG5cbiAgICBwcml2YXRlIHRoZW1lczogYW55W107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jb250ZW50U2VydmljZTogQ29udGVudFNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy50aGVtZXMgPSBfY29udGVudFNlcnZpY2UuZ2V0VGhlbWVzKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGFwcGx5VGhlbWUodGhlbWU6IHN0cmluZykge1xuICAgICAgICB0aGVtZXMuYXBwbHlUaGVtZSh0aGVtZSk7XG4gICAgfVxufVxuIl19