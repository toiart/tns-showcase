"use strict";
// angular
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
// nativescript
var angular_1 = require("nativescript-telerik-ui-pro/sidedrawer/angular");
var sidedrawer_1 = require("nativescript-telerik-ui-pro/sidedrawer");
var page_1 = require("ui/page");
var application = require('application');
var WrapperComponent = (function () {
    function WrapperComponent(page, changeDetectionRef, router) {
        this.page = page;
        this.changeDetectionRef = changeDetectionRef;
        this.router = router;
        page.actionBarHidden = false;
        if (application.android) {
            application.android.on(application.AndroidApplication.activityBackPressedEvent, zonedCallback(this.backEvent.bind(this)));
        }
        page.on('loaded', this.onLoaded, this);
    }
    Object.defineProperty(WrapperComponent.prototype, "sideDrawerTransition", {
        get: function () {
            return this._sideDrawerTransition;
        },
        enumerable: true,
        configurable: true
    });
    WrapperComponent.prototype.toggle = function () {
        this.drawer.toggleDrawerState();
    };
    WrapperComponent.prototype.onLoaded = function (args) {
        this._sideDrawerTransition = new sidedrawer_1.SlideInOnTopTransition();
    };
    WrapperComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (e) {
            if (e instanceof router_1.NavigationEnd) {
                _this.drawer.closeDrawer();
            }
        });
    };
    WrapperComponent.prototype.ngAfterViewInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
        this.changeDetectionRef.detectChanges();
    };
    WrapperComponent.prototype.backEvent = function (args) {
        this.drawer.closeDrawer();
        args.cancel = true;
    };
    return WrapperComponent;
}());
__decorate([
    core_1.ViewChild(angular_1.RadSideDrawerComponent),
    __metadata("design:type", angular_1.RadSideDrawerComponent)
], WrapperComponent.prototype, "drawerComponent", void 0);
WrapperComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sc-wrapper',
        templateUrl: 'wrapper.component.html',
        animations: [
            core_1.trigger('state', [
                core_1.state('inactive', core_1.style({ transform: 'rotate(0)' })),
                core_1.state('active', core_1.style({ transform: 'rotate(90)' })),
                core_1.transition('inactive => active', [core_1.animate('200ms ease-out')]),
                core_1.transition('active => inactive', [core_1.animate('200ms ease-out')]),
            ])
        ]
    }),
    __metadata("design:paramtypes", [page_1.Page,
        core_1.ChangeDetectorRef,
        router_1.Router])
], WrapperComponent);
exports.WrapperComponent = WrapperComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid3JhcHBlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3cmFwcGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsVUFBVTtBQUNWLHNDQUF5STtBQUN6SSwwQ0FBc0Q7QUFFdEQsZUFBZTtBQUNmLDBFQUFzRztBQUN0RyxxRUFBb0c7QUFFcEcsZ0NBQTZCO0FBQzdCLElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztBQWV6QyxJQUFhLGdCQUFnQjtJQU0zQiwwQkFDVSxJQUFVLEVBQ1Ysa0JBQXFDLEVBQ3JDLE1BQWM7UUFGZCxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUNyQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ3RCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBQzdCLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLFdBQVcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyx3QkFBd0IsRUFBRSxhQUFhLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVILENBQUM7UUFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxzQkFBVyxrREFBb0I7YUFBL0I7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDO1FBQ3BDLENBQUM7OztPQUFBO0lBRU0saUNBQU0sR0FBYjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRU0sbUNBQVEsR0FBZixVQUFnQixJQUFJO1FBQ2xCLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLG1DQUFzQixFQUFFLENBQUM7SUFDNUQsQ0FBQztJQUVELG1DQUFRLEdBQVI7UUFBQSxpQkFNQztRQUxDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFDLENBQUM7WUFDN0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxZQUFZLHNCQUFhLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixLQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQzVCLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCwwQ0FBZSxHQUFmO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQztRQUM5QyxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQUVNLG9DQUFTLEdBQWhCLFVBQWlCLElBQUk7UUFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQUFDLEFBOUNELElBOENDO0FBNUNvQztJQUFsQyxnQkFBUyxDQUFDLGdDQUFzQixDQUFDOzhCQUF5QixnQ0FBc0I7eURBQUM7QUFGdkUsZ0JBQWdCO0lBYjVCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLFlBQVk7UUFDdEIsV0FBVyxFQUFFLHdCQUF3QjtRQUNyQyxVQUFVLEVBQUU7WUFDVixjQUFPLENBQUMsT0FBTyxFQUFFO2dCQUNmLFlBQUssQ0FBQyxVQUFVLEVBQUUsWUFBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUM7Z0JBQ3BELFlBQUssQ0FBQyxRQUFRLEVBQUUsWUFBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUM7Z0JBQ25ELGlCQUFVLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxjQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO2dCQUM3RCxpQkFBVSxDQUFDLG9CQUFvQixFQUFFLENBQUMsY0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQzthQUM5RCxDQUFDO1NBQ0g7S0FDRixDQUFDO3FDQVFnQixXQUFJO1FBQ1Usd0JBQWlCO1FBQzdCLGVBQU07R0FUYixnQkFBZ0IsQ0E4QzVCO0FBOUNZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFuZ3VsYXJcbmltcG9ydCB7Q29tcG9uZW50LCBWaWV3Q2hpbGQsIENoYW5nZURldGVjdG9yUmVmLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIHRyaWdnZXIsIHN0eWxlLCBhbmltYXRlLCBzdGF0ZSwgdHJhbnNpdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JvdXRlciwgTmF2aWdhdGlvbkVuZH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuLy8gbmF0aXZlc2NyaXB0XG5pbXBvcnQge1JhZFNpZGVEcmF3ZXJDb21wb25lbnQsIFNpZGVEcmF3ZXJUeXBlfSBmcm9tICduYXRpdmVzY3JpcHQtdGVsZXJpay11aS1wcm8vc2lkZWRyYXdlci9hbmd1bGFyJztcbmltcG9ydCB7RHJhd2VyVHJhbnNpdGlvbkJhc2UsIFNsaWRlSW5PblRvcFRyYW5zaXRpb259IGZyb20gJ25hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpLXByby9zaWRlZHJhd2VyJztcblxuaW1wb3J0IHtQYWdlfSBmcm9tICd1aS9wYWdlJztcbnZhciBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoJ2FwcGxpY2F0aW9uJyk7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3NjLXdyYXBwZXInLFxuICB0ZW1wbGF0ZVVybDogJ3dyYXBwZXIuY29tcG9uZW50Lmh0bWwnLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignc3RhdGUnLCBbXG4gICAgICBzdGF0ZSgnaW5hY3RpdmUnLCBzdHlsZSh7IHRyYW5zZm9ybTogJ3JvdGF0ZSgwKScgfSkpLFxuICAgICAgc3RhdGUoJ2FjdGl2ZScsIHN0eWxlKHsgdHJhbnNmb3JtOiAncm90YXRlKDkwKScgfSkpLFxuICAgICAgdHJhbnNpdGlvbignaW5hY3RpdmUgPT4gYWN0aXZlJywgW2FuaW1hdGUoJzIwMG1zIGVhc2Utb3V0JyldKSxcbiAgICAgIHRyYW5zaXRpb24oJ2FjdGl2ZSA9PiBpbmFjdGl2ZScsIFthbmltYXRlKCcyMDBtcyBlYXNlLW91dCcpXSksXG4gICAgXSlcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBXcmFwcGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcblxuICBAVmlld0NoaWxkKFJhZFNpZGVEcmF3ZXJDb21wb25lbnQpIHB1YmxpYyBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XG4gIHByaXZhdGUgX3NpZGVEcmF3ZXJUcmFuc2l0aW9uOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZTtcbiAgcHJpdmF0ZSBkcmF3ZXI6IFNpZGVEcmF3ZXJUeXBlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcGFnZTogUGFnZSxcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdGlvblJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuICAgIHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gZmFsc2U7XG4gICAgaWYgKGFwcGxpY2F0aW9uLmFuZHJvaWQpIHtcbiAgICAgIGFwcGxpY2F0aW9uLmFuZHJvaWQub24oYXBwbGljYXRpb24uQW5kcm9pZEFwcGxpY2F0aW9uLmFjdGl2aXR5QmFja1ByZXNzZWRFdmVudCwgem9uZWRDYWxsYmFjayh0aGlzLmJhY2tFdmVudC5iaW5kKHRoaXMpKSk7XG4gICAgfVxuICAgIHBhZ2Uub24oJ2xvYWRlZCcsIHRoaXMub25Mb2FkZWQsIHRoaXMpO1xuICB9XG5cbiAgcHVibGljIGdldCBzaWRlRHJhd2VyVHJhbnNpdGlvbigpOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZSB7XG4gICAgcmV0dXJuIHRoaXMuX3NpZGVEcmF3ZXJUcmFuc2l0aW9uO1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZSgpIHtcbiAgICB0aGlzLmRyYXdlci50b2dnbGVEcmF3ZXJTdGF0ZSgpO1xuICB9XG5cbiAgcHVibGljIG9uTG9hZGVkKGFyZ3MpIHtcbiAgICB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbiA9IG5ldyBTbGlkZUluT25Ub3BUcmFuc2l0aW9uKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJvdXRlci5ldmVudHMuc3Vic2NyaWJlKChlKSA9PiB7XG4gICAgICBpZiAoZSBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpIHtcbiAgICAgICAgdGhpcy5kcmF3ZXIuY2xvc2VEcmF3ZXIoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmRyYXdlciA9IHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXI7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3Rpb25SZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgcHVibGljIGJhY2tFdmVudChhcmdzKSB7XG4gICAgdGhpcy5kcmF3ZXIuY2xvc2VEcmF3ZXIoKTtcbiAgICBhcmdzLmNhbmNlbCA9IHRydWU7XG4gIH1cbn1cbiJdfQ==