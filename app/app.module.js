"use strict";
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var http_1 = require("nativescript-angular/http");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var angular_1 = require("nativescript-telerik-ui-pro/sidedrawer/angular");
var angular_2 = require("nativescript-telerik-ui-pro/chart/angular");
var content_service_1 = require("./common/services/content.service");
var showcase_layout_component_1 = require("./common/components/showcase-layout/showcase-layout.component");
var side_drawer_component_1 = require("./common/components/side-drawer/side-drawer.component");
var exit_modal_component_1 = require("./common/components/exit-modal/exit-modal.component");
var retailer_service_1 = require("./pages/retailer/retailer.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: [
            app_component_1.AppComponent
        ],
        imports: [
            nativescript_module_1.NativeScriptModule,
            app_routing_1.AppRoutingModule,
            http_1.NativeScriptHttpModule
        ],
        declarations: [
            app_component_1.AppComponent,
            showcase_layout_component_1.ShowcaseLayout,
            side_drawer_component_1.SideDrawerComponent,
            exit_modal_component_1.ExitModalComponent,
            angular_1.SIDEDRAWER_DIRECTIVES,
            angular_2.CHART_DIRECTIVES
        ].concat(app_routing_1.routableComponents),
        providers: [
            retailer_service_1.RetailerService,
            content_service_1.ContentService
        ],
        schemas: [
            core_1.NO_ERRORS_SCHEMA
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEyRDtBQUMzRCxnRkFBOEU7QUFDOUUsa0RBQW1FO0FBRW5FLDZDQUFxRTtBQUNyRSxpREFBK0M7QUFDL0MsMEVBQXVGO0FBQ3ZGLHFFQUE2RTtBQUM3RSxxRUFBbUU7QUFDbkUsMkdBQStGO0FBQy9GLCtGQUE0RjtBQUM1Riw0RkFBeUY7QUFFekYsc0VBQW9FO0FBNEJwRSxJQUFhLFNBQVM7SUFBdEI7SUFBeUIsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQyxBQUExQixJQUEwQjtBQUFiLFNBQVM7SUExQnJCLGVBQVEsQ0FBQztRQUNOLFNBQVMsRUFBRTtZQUNQLDRCQUFZO1NBQ2Y7UUFDRCxPQUFPLEVBQUU7WUFDTCx3Q0FBa0I7WUFDbEIsOEJBQWdCO1lBQ2hCLDZCQUFzQjtTQUN6QjtRQUNELFlBQVk7WUFDUiw0QkFBWTtZQUNaLDBDQUFjO1lBQ2QsMkNBQW1CO1lBQ25CLHlDQUFrQjtZQUNsQiwrQkFBcUI7WUFDckIsMEJBQWdCO2lCQUNiLGdDQUFrQixDQUN4QjtRQUNELFNBQVMsRUFBRTtZQUNQLGtDQUFlO1lBQ2YsZ0NBQWM7U0FDakI7UUFDRCxPQUFPLEVBQUU7WUFDTCx1QkFBZ0I7U0FDbkI7S0FDSixDQUFDO0dBQ1csU0FBUyxDQUFJO0FBQWIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSwgcm91dGFibGVDb21wb25lbnRzIH0gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFNJREVEUkFXRVJfRElSRUNUSVZFUyB9IGZyb20gJ25hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpLXByby9zaWRlZHJhd2VyL2FuZ3VsYXInO1xuaW1wb3J0IHsgQ0hBUlRfRElSRUNUSVZFUyB9IGZyb20gJ25hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpLXByby9jaGFydC9hbmd1bGFyJztcbmltcG9ydCB7IENvbnRlbnRTZXJ2aWNlIH0gZnJvbSAnLi9jb21tb24vc2VydmljZXMvY29udGVudC5zZXJ2aWNlJztcbmltcG9ydCB7IFNob3djYXNlTGF5b3V0IH0gZnJvbSAnLi9jb21tb24vY29tcG9uZW50cy9zaG93Y2FzZS1sYXlvdXQvc2hvd2Nhc2UtbGF5b3V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaWRlRHJhd2VyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21tb24vY29tcG9uZW50cy9zaWRlLWRyYXdlci9zaWRlLWRyYXdlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXhpdE1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9jb21tb24vY29tcG9uZW50cy9leGl0LW1vZGFsL2V4aXQtbW9kYWwuY29tcG9uZW50JztcblxuaW1wb3J0IHsgUmV0YWlsZXJTZXJ2aWNlIH0gZnJvbSBcIi4vcGFnZXMvcmV0YWlsZXIvcmV0YWlsZXIuc2VydmljZVwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGJvb3RzdHJhcDogW1xuICAgICAgICBBcHBDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgICBTaG93Y2FzZUxheW91dCxcbiAgICAgICAgU2lkZURyYXdlckNvbXBvbmVudCxcbiAgICAgICAgRXhpdE1vZGFsQ29tcG9uZW50LFxuICAgICAgICBTSURFRFJBV0VSX0RJUkVDVElWRVMsXG4gICAgICAgIENIQVJUX0RJUkVDVElWRVMsXG4gICAgICAgIC4uLnJvdXRhYmxlQ29tcG9uZW50cyxcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBSZXRhaWxlclNlcnZpY2UsXG4gICAgICAgIENvbnRlbnRTZXJ2aWNlXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==