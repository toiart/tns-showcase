"use strict";
var core_1 = require("@angular/core");
var appSettings = require('application-settings');
var HomePage = (function () {
    function HomePage() {
        this.firstLaunch = appSettings.getBoolean('firstLaunch', true);
    }
    return HomePage;
}());
HomePage = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sc-home-page',
        templateUrl: 'home.html',
        styleUrls: ['home.css']
    }),
    __metadata("design:paramtypes", [])
], HomePage);
exports.HomePage = HomePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXdDO0FBRXhDLElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBUWxELElBQWEsUUFBUTtJQUlqQjtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUNMLGVBQUM7QUFBRCxDQUFDLEFBUEQsSUFPQztBQVBZLFFBQVE7SUFOcEIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsY0FBYztRQUN4QixXQUFXLEVBQUUsV0FBVztRQUN4QixTQUFTLEVBQUUsQ0FBQyxVQUFVLENBQUM7S0FDMUIsQ0FBQzs7R0FDVyxRQUFRLENBT3BCO0FBUFksNEJBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbnZhciBhcHBTZXR0aW5ncyA9IHJlcXVpcmUoJ2FwcGxpY2F0aW9uLXNldHRpbmdzJyk7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdzYy1ob21lLXBhZ2UnLFxuICAgIHRlbXBsYXRlVXJsOiAnaG9tZS5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnaG9tZS5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lUGFnZSB7XG5cbiAgICBwcml2YXRlIGZpcnN0TGF1bmNoOiBib29sZWFuO1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmZpcnN0TGF1bmNoID0gYXBwU2V0dGluZ3MuZ2V0Qm9vbGVhbignZmlyc3RMYXVuY2gnLCB0cnVlKTtcbiAgICB9XG59XG4iXX0=