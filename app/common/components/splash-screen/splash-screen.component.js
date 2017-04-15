"use strict";
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var page_1 = require("ui/page");
var SplashScreenComponent = (function () {
    function SplashScreenComponent(nav, page) {
        this.nav = nav;
        page.className = 'app-color-primary';
    }
    SplashScreenComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        //Closing splash screen
        setTimeout(function () {
            _this.nav.navigate(['/home/'], {
                clearHistory: true,
                transition: {
                    name: 'fade',
                    duration: 400,
                    curve: 'linear'
                }
            });
        }, 2000);
    };
    return SplashScreenComponent;
}());
SplashScreenComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sc-splash-screen',
        templateUrl: 'splash-screen.component.html',
        styleUrls: ['splash-screen.component.css'],
    }),
    __metadata("design:paramtypes", [router_1.RouterExtensions, page_1.Page])
], SplashScreenComponent);
exports.SplashScreenComponent = SplashScreenComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BsYXNoLXNjcmVlbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzcGxhc2gtc2NyZWVuLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXdEO0FBQ3hELHNEQUE2RDtBQUM3RCxnQ0FBNkI7QUFRN0IsSUFBYSxxQkFBcUI7SUFFOUIsK0JBQW9CLEdBQXFCLEVBQUUsSUFBVTtRQUFqQyxRQUFHLEdBQUgsR0FBRyxDQUFrQjtRQUNyQyxJQUFJLENBQUMsU0FBUyxHQUFHLG1CQUFtQixDQUFDO0lBQ3pDLENBQUM7SUFFRCwrQ0FBZSxHQUFmO1FBQUEsaUJBWUM7UUFYRyx1QkFBdUI7UUFDdkIsVUFBVSxDQUFDO1lBQ1AsS0FBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDMUIsWUFBWSxFQUFFLElBQUk7Z0JBQ2xCLFVBQVUsRUFBRTtvQkFDUixJQUFJLEVBQUUsTUFBTTtvQkFDWixRQUFRLEVBQUUsR0FBRztvQkFDYixLQUFLLEVBQUUsUUFBUTtpQkFDbEI7YUFDSixDQUFDLENBQUM7UUFDUCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDYixDQUFDO0lBQ0wsNEJBQUM7QUFBRCxDQUFDLEFBbkJELElBbUJDO0FBbkJZLHFCQUFxQjtJQU5qQyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxrQkFBa0I7UUFDNUIsV0FBVyxFQUFFLDhCQUE4QjtRQUMzQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztLQUM3QyxDQUFDO3FDQUcyQix5QkFBZ0IsRUFBUSxXQUFJO0dBRjVDLHFCQUFxQixDQW1CakM7QUFuQlksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBBZnRlclZpZXdJbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7UGFnZX0gZnJvbSAndWkvcGFnZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdzYy1zcGxhc2gtc2NyZWVuJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3NwbGFzaC1zY3JlZW4uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWydzcGxhc2gtc2NyZWVuLmNvbXBvbmVudC5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU3BsYXNoU2NyZWVuQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5hdjogUm91dGVyRXh0ZW5zaW9ucywgcGFnZTogUGFnZSkge1xuICAgICAgICBwYWdlLmNsYXNzTmFtZSA9ICdhcHAtY29sb3ItcHJpbWFyeSc7XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICAvL0Nsb3Npbmcgc3BsYXNoIHNjcmVlblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubmF2Lm5hdmlnYXRlKFsnL2hvbWUvJ10sIHtcbiAgICAgICAgICAgICAgICBjbGVhckhpc3Rvcnk6IHRydWUsXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZmFkZScsXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA0MDAsXG4gICAgICAgICAgICAgICAgICAgIGN1cnZlOiAnbGluZWFyJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCAyMDAwKTtcbiAgICB9XG59XG4iXX0=