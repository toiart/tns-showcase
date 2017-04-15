"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var SideDrawerComponent = (function () {
    function SideDrawerComponent(router, page) {
        this.router = router;
        this.page = page;
        this.close = new core_1.EventEmitter();
        this.exit = new core_1.EventEmitter();
        this.navigate = new core_1.EventEmitter();
        //Menu categories
        this.sideDrawerCategories = [
            { name: 'Home', icon: '\uf175', page: '/home' },
            {
                name: 'Components', icon: '\uf328', subItems: [
                    { name: 'Buttons', page: 'buttons', icon: '\uf155' },
                    { name: 'Text', page: 'text', icon: '\uf242' },
                    { name: 'Lists', page: 'lists', icon: '\uf247' },
                    { name: 'Pickers', page: 'pickers', icon: '\uf30c' },
                    { name: 'Layouts', page: 'layouts', icon: '\uf31c' },
                    { name: 'Selectors', page: 'selectors', icon: '\uf26f' },
                    { name: 'Indicators', page: 'indicators', icon: '\uf1b8' },
                    { name: 'Images', page: 'images', icon: '\uf17f' },
                    { name: 'Views', page: 'views', icon: '\uf279' },
                    { name: 'Dialogs', page: 'dialogs', icon: '\uf14b' },
                ]
            },
            {
                name: 'Hardware', icon: '\uf2cc', subItems: [
                    { name: 'Camera', page: 'camera', icon: '\uf28c' },
                    { name: 'Accelerometer', page: 'accelerometer', icon: '\uf101' },
                    { name: 'Location', page: 'location', icon: '\uf299' }
                ]
            },
            {
                name: 'Examples', icon: '\uf318', subItems: [
                    { name: 'Login', page: 'login', icon: '\uf1cc' },
                    { name: 'Table', page: 'table', icon: '\uf22b' },
                    { name: 'Contacts', page: 'contacts', icon: '\uf20b' },
                    { name: 'CodeScanner', page: 'codescanner', icon: '\uf16d' },
                    { name: 'Database', page: 'database', icon: '\uf18c' },
                    { name: 'Animations', page: 'animations', icon: '\uf1e1' },
                    { name: 'Charts', page: 'charts', icon: '\uf131' },
                    { name: 'Tasks', page: 'tasks', icon: '\uf269' },
                    { name: 'SignaturePad', page: 'signaturepad', icon: '\uf11f' }
                ]
            },
            { name: 'Settings', icon: '\uf1c6', page: '/home/settings' },
            { name: 'Retailer', icon: '\uf1c6', page: '/home/retailers' },
        ];
        this.subToggled = false;
        this.animationDuration = 200;
        this.subItems = [];
    }
    SideDrawerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (e) {
            if (e instanceof router_1.NavigationEnd) {
                _this.closeSubSideDrawer();
            }
        });
    };
    SideDrawerComponent.prototype.ngAfterViewInit = function () {
        this.setNativeElements();
    };
    //Menu item tap
    SideDrawerComponent.prototype.itemTap = function (args, subItems, pageName) {
        if (subItems) {
            if (this.subToggled) {
                this.closeSubSideDrawer();
                if (this.subItems !== subItems) {
                    this.subItems = subItems;
                    this.openSubSideDrawer();
                }
                ;
            }
            else {
                this.subItems = subItems;
                this.openSubSideDrawer();
            }
        }
        else {
            this.navItemTap(args, pageName);
        }
    };
    //Menu sub item tap
    SideDrawerComponent.prototype.navItemTap = function (args, pageName) {
        if (pageName !== 'exit') {
            this.router.navigate([pageName]);
        }
        else {
            this.exit.emit(false);
        }
    };
    //Close side drawer animation
    SideDrawerComponent.prototype.closeSideDrawer = function () {
        this.closeSubSideDrawer();
        this.subToggled = false;
    };
    //Close sub side drawer animation
    SideDrawerComponent.prototype.closeSubSideDrawer = function (then) {
        this.subToggled = false;
        this.subSideDrawer.animate({
            duration: this.animationDuration,
            translate: { x: 0, y: 0 },
            curve: 'easeIn'
        });
        // return new Promise((resolve, reject) => {
        //     //Animation
        //     this.subSideDrawer.animate({
        //         duration: this.animationDuration,
        //         translate: { x: 0, y: 0 },
        //         curve: 'easeIn'
        //     }).then(() => {
        //         resolve();
        //     });
        // });
    };
    //Open sub side drawer animation
    SideDrawerComponent.prototype.openSubSideDrawer = function () {
        var _this = this;
        this.subToggled = true;
        this.subSideDrawer.animate({
            duration: this.animationDuration,
            translate: { x: 130, y: 0 },
            curve: 'easeOut'
        });
        setTimeout(function () {
            var lastButton = _this.page.getViewById(_this.router.url.toLocaleLowerCase());
            if (lastButton) {
                lastButton.className = 'app-color-quaternary';
            }
        });
    };
    // Native elements set
    SideDrawerComponent.prototype.setNativeElements = function () {
        this.sideDrawer = this.sideDrawerRef.nativeElement;
        this.subSideDrawer = this.subSideDrawerRef.nativeElement;
    };
    return SideDrawerComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], SideDrawerComponent.prototype, "toggled", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SideDrawerComponent.prototype, "close", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SideDrawerComponent.prototype, "exit", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SideDrawerComponent.prototype, "navigate", void 0);
__decorate([
    core_1.ViewChild('sideDrawer'),
    __metadata("design:type", core_1.ElementRef)
], SideDrawerComponent.prototype, "sideDrawerRef", void 0);
__decorate([
    core_1.ViewChild('subSideDrawer'),
    __metadata("design:type", core_1.ElementRef)
], SideDrawerComponent.prototype, "subSideDrawerRef", void 0);
SideDrawerComponent = __decorate([
    core_1.Component({
        selector: 'sc-side-drawer',
        templateUrl: 'common/components/side-drawer/side-drawer.component.html',
        animations: [
            core_1.trigger('state', [
                core_1.state('inactiveSD', core_1.style({ transform: 'translateX(0)' })),
                core_1.state('activeSD', core_1.style({ transform: 'translateX(130)' })),
                core_1.transition('inactiveSD => activeSD', [core_1.animate('200ms ease-out')]),
                core_1.transition('activeSD => inactiveSD', [core_1.animate('200ms ease-out')]),
                core_1.state('inactiveBD', core_1.style({ opacity: '0' })),
                core_1.state('activeBD', core_1.style({ opacity: '.3' })),
                core_1.transition('inactiveBD => activeBD', [core_1.animate('200ms ease-out')]),
                core_1.transition('activeBD => inactiveBD', [core_1.animate('200ms ease-out')]),
                core_1.state('inactiveSSD', core_1.style({ transform: 'translateX(0)' })),
                core_1.state('activeSSD', core_1.style({ transform: 'translateX(260)' })),
                core_1.transition('inactiveSSD => activeSSD', [core_1.animate('200ms ease-out')]),
                core_1.transition('activeSSD => inactiveSSD', [core_1.animate('200ms ease-out')]),
            ])
        ]
    }),
    __metadata("design:paramtypes", [router_1.Router, page_1.Page])
], SideDrawerComponent);
exports.SideDrawerComponent = SideDrawerComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1kcmF3ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2lkZS1kcmF3ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBZ0s7QUFDaEssMENBQXNEO0FBRXRELGdDQUE2QjtBQXNCN0IsSUFBYSxtQkFBbUI7SUFvRDVCLDZCQUFvQixNQUFjLEVBQVUsSUFBVTtRQUFsQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQWpENUMsVUFBSyxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO1FBQzNCLFNBQUksR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUMxQixhQUFRLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFFeEMsaUJBQWlCO1FBQ2pCLHlCQUFvQixHQUFlO1lBQy9CLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUU7WUFDL0M7Z0JBQ0ksSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRTtvQkFDMUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTtvQkFDcEQsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTtvQkFDOUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTtvQkFDaEQsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTtvQkFDcEQsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTtv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QyxZQUFZLEVBQUUsWUFBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBQzVDLFlBQUssQ0FBQyxVQUFVLEVBQUUsWUFBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7Z0JBQzNDLGlCQUFVLENBQUMsd0JBQXdCLEVBQUUsQ0FBQyxjQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO2dCQUNqRSxpQkFBVSxDQUFDLHdCQUF3QixFQUFFLENBQUMsY0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztnQkFDakUsWUFBSyxDQUFDLGFBQWEsRUFBRSxZQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLENBQUMsQ0FBQztnQkFDM0QsWUFBSyxDQUFDLFdBQVcsRUFBRSxZQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO2dCQUMzRCxpQkFBVSxDQUFDLDBCQUEwQixFQUFFLENBQUMsY0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztnQkFDbkUsaUJBQVUsQ0FBQywwQkFBMEIsRUFBRSxDQUFDLGNBQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7YUFDdEUsQ0FBQztTQUNMO0tBQ0osQ0FBQztxQ0FxRDhCLGVBQU0sRUFBZ0IsV0FBSTtHQXBEN0MsbUJBQW1CLENBb0ovQjtBQXBKWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIGFuaW1hdGUsIHRyaWdnZXIsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JvdXRlciwgTmF2aWdhdGlvbkVuZH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7UGFnZX0gZnJvbSAndWkvcGFnZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2Mtc2lkZS1kcmF3ZXInLFxuICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL2NvbXBvbmVudHMvc2lkZS1kcmF3ZXIvc2lkZS1kcmF3ZXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIGFuaW1hdGlvbnM6IFtcbiAgICAgICAgdHJpZ2dlcignc3RhdGUnLCBbXG4gICAgICAgICAgICBzdGF0ZSgnaW5hY3RpdmVTRCcsIHN0eWxlKHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwKScgfSkpLFxuICAgICAgICAgICAgc3RhdGUoJ2FjdGl2ZVNEJywgc3R5bGUoeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDEzMCknIH0pKSxcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJ2luYWN0aXZlU0QgPT4gYWN0aXZlU0QnLCBbYW5pbWF0ZSgnMjAwbXMgZWFzZS1vdXQnKV0pLFxuICAgICAgICAgICAgdHJhbnNpdGlvbignYWN0aXZlU0QgPT4gaW5hY3RpdmVTRCcsIFthbmltYXRlKCcyMDBtcyBlYXNlLW91dCcpXSksXG4gICAgICAgICAgICBzdGF0ZSgnaW5hY3RpdmVCRCcsIHN0eWxlKHsgb3BhY2l0eTogJzAnIH0pKSxcbiAgICAgICAgICAgIHN0YXRlKCdhY3RpdmVCRCcsIHN0eWxlKHsgb3BhY2l0eTogJy4zJyB9KSksXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCdpbmFjdGl2ZUJEID0+IGFjdGl2ZUJEJywgW2FuaW1hdGUoJzIwMG1zIGVhc2Utb3V0JyldKSxcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJ2FjdGl2ZUJEID0+IGluYWN0aXZlQkQnLCBbYW5pbWF0ZSgnMjAwbXMgZWFzZS1vdXQnKV0pLFxuICAgICAgICAgICAgc3RhdGUoJ2luYWN0aXZlU1NEJywgc3R5bGUoeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDApJyB9KSksXG4gICAgICAgICAgICBzdGF0ZSgnYWN0aXZlU1NEJywgc3R5bGUoeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDI2MCknIH0pKSxcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJ2luYWN0aXZlU1NEID0+IGFjdGl2ZVNTRCcsIFthbmltYXRlKCcyMDBtcyBlYXNlLW91dCcpXSksXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCdhY3RpdmVTU0QgPT4gaW5hY3RpdmVTU0QnLCBbYW5pbWF0ZSgnMjAwbXMgZWFzZS1vdXQnKV0pLFxuICAgICAgICBdKVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgU2lkZURyYXdlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgICBASW5wdXQoKSBwdWJsaWMgdG9nZ2xlZDogYm9vbGVhbjtcbiAgICBAT3V0cHV0KCkgY2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgpIGV4aXQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgpIG5hdmlnYXRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgLy9NZW51IGNhdGVnb3JpZXNcbiAgICBzaWRlRHJhd2VyQ2F0ZWdvcmllczogQXJyYXk8YW55PiA9IFtcbiAgICAgICAgeyBuYW1lOiAnSG9tZScsIGljb246ICdcXHVmMTc1JywgcGFnZTogJy9ob21lJyB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnQ29tcG9uZW50cycsIGljb246ICdcXHVmMzI4Jywgc3ViSXRlbXM6IFtcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdCdXR0b25zJywgcGFnZTogJ2J1dHRvbnMnLCBpY29uOiAnXFx1ZjE1NScgfSxcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdUZXh0JywgcGFnZTogJ3RleHQnLCBpY29uOiAnXFx1ZjI0MicgfSxcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdMaXN0cycsIHBhZ2U6ICdsaXN0cycsIGljb246ICdcXHVmMjQ3JyB9LFxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ1BpY2tlcnMnLCBwYWdlOiAncGlja2VycycsIGljb246ICdcXHVmMzBjJyB9LFxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ0xheW91dHMnLCBwYWdlOiAnbGF5b3V0cycsIGljb246ICdcXHVmMzFjJyB9LFxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ1NlbGVjdG9ycycsIHBhZ2U6ICdzZWxlY3RvcnMnLCBpY29uOiAnXFx1ZjI2ZicgfSxcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdJbmRpY2F0b3JzJywgcGFnZTogJ2luZGljYXRvcnMnLCBpY29uOiAnXFx1ZjFiOCcgfSxcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdJbWFnZXMnLCBwYWdlOiAnaW1hZ2VzJywgaWNvbjogJ1xcdWYxN2YnIH0sXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnVmlld3MnLCBwYWdlOiAndmlld3MnLCBpY29uOiAnXFx1ZjI3OScgfSxcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdEaWFsb2dzJywgcGFnZTogJ2RpYWxvZ3MnLCBpY29uOiAnXFx1ZjE0YicgfSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ0hhcmR3YXJlJywgaWNvbjogJ1xcdWYyY2MnLCBzdWJJdGVtczogW1xuICAgICAgICAgICAgICAgIHsgbmFtZTogJ0NhbWVyYScsIHBhZ2U6ICdjYW1lcmEnLCBpY29uOiAnXFx1ZjI4YycgfSxcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdBY2NlbGVyb21ldGVyJywgcGFnZTogJ2FjY2VsZXJvbWV0ZXInLCBpY29uOiAnXFx1ZjEwMScgfSxcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdMb2NhdGlvbicsIHBhZ2U6ICdsb2NhdGlvbicsIGljb246ICdcXHVmMjk5JyB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdFeGFtcGxlcycsIGljb246ICdcXHVmMzE4Jywgc3ViSXRlbXM6IFtcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdMb2dpbicsIHBhZ2U6ICdsb2dpbicsIGljb246ICdcXHVmMWNjJyB9LFxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ1RhYmxlJywgcGFnZTogJ3RhYmxlJywgaWNvbjogJ1xcdWYyMmInIH0sXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnQ29udGFjdHMnLCBwYWdlOiAnY29udGFjdHMnLCBpY29uOiAnXFx1ZjIwYicgfSxcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdDb2RlU2Nhbm5lcicsIHBhZ2U6ICdjb2Rlc2Nhbm5lcicsIGljb246ICdcXHVmMTZkJyB9LFxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ0RhdGFiYXNlJywgcGFnZTogJ2RhdGFiYXNlJywgaWNvbjogJ1xcdWYxOGMnIH0sXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnQW5pbWF0aW9ucycsIHBhZ2U6ICdhbmltYXRpb25zJywgaWNvbjogJ1xcdWYxZTEnIH0sXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnQ2hhcnRzJywgcGFnZTogJ2NoYXJ0cycsIGljb246ICdcXHVmMTMxJyB9LFxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ1Rhc2tzJywgcGFnZTogJ3Rhc2tzJywgaWNvbjogJ1xcdWYyNjknIH0sXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnU2lnbmF0dXJlUGFkJywgcGFnZTogJ3NpZ25hdHVyZXBhZCcsIGljb246ICdcXHVmMTFmJyB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHsgbmFtZTogJ1NldHRpbmdzJywgaWNvbjogJ1xcdWYxYzYnLCBwYWdlOiAnL2hvbWUvc2V0dGluZ3MnIH0sXG4gICAgICAgIHsgbmFtZTogJ1JldGFpbGVyJywgaWNvbjogJ1xcdWYxYzYnLCBwYWdlOiAnL2hvbWUvcmV0YWlsZXJzJyB9LFxuICAgICAgICAvLyB7IG5hbWU6ICdFeGl0JywgaWNvbjogJ1xcdWYxMzYnLCBwYWdlOiAnZXhpdCcgfSxcbiAgICBdO1xuICAgIHByaXZhdGUgc3ViVG9nZ2xlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgYW5pbWF0aW9uRHVyYXRpb246IG51bWJlciA9IDIwMDtcbiAgICBwcml2YXRlIHN1Ykl0ZW1zOiBBcnJheTxhbnk+ID0gW107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHBhZ2U6IFBhZ2UpIHsgfVxuXG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIuZXZlbnRzLnN1YnNjcmliZSgoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZVN1YlNpZGVEcmF3ZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLnNldE5hdGl2ZUVsZW1lbnRzKCk7XG4gICAgfVxuXG4gICAgLy9NZW51IGl0ZW0gdGFwXG4gICAgcHVibGljIGl0ZW1UYXAoYXJncywgc3ViSXRlbXM6IEFycmF5PGFueT4sIHBhZ2VOYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHN1Ykl0ZW1zKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdWJUb2dnbGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZVN1YlNpZGVEcmF3ZXIoKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdWJJdGVtcyAhPT0gc3ViSXRlbXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJJdGVtcyA9IHN1Ykl0ZW1zO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW5TdWJTaWRlRHJhd2VyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJJdGVtcyA9IHN1Ykl0ZW1zO1xuICAgICAgICAgICAgICAgIHRoaXMub3BlblN1YlNpZGVEcmF3ZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubmF2SXRlbVRhcChhcmdzLCBwYWdlTmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL01lbnUgc3ViIGl0ZW0gdGFwXG4gICAgcHVibGljIG5hdkl0ZW1UYXAoYXJncywgcGFnZU5hbWU6IHN0cmluZykge1xuICAgICAgICBpZiAocGFnZU5hbWUgIT09ICdleGl0Jykge1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3BhZ2VOYW1lXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmV4aXQuZW1pdChmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL0Nsb3NlIHNpZGUgZHJhd2VyIGFuaW1hdGlvblxuICAgIHB1YmxpYyBjbG9zZVNpZGVEcmF3ZXIoKSB7XG4gICAgICAgIHRoaXMuY2xvc2VTdWJTaWRlRHJhd2VyKCk7XG4gICAgICAgIHRoaXMuc3ViVG9nZ2xlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8vQ2xvc2Ugc3ViIHNpZGUgZHJhd2VyIGFuaW1hdGlvblxuICAgIHB1YmxpYyBjbG9zZVN1YlNpZGVEcmF3ZXIodGhlbj8pIHtcbiAgICAgICAgdGhpcy5zdWJUb2dnbGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3ViU2lkZURyYXdlci5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogdGhpcy5hbmltYXRpb25EdXJhdGlvbixcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGU6IHsgeDogMCwgeTogMCB9LFxuICAgICAgICAgICAgICAgIGN1cnZlOiAnZWFzZUluJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgLy8gcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgLy8gICAgIC8vQW5pbWF0aW9uXG4gICAgICAgIC8vICAgICB0aGlzLnN1YlNpZGVEcmF3ZXIuYW5pbWF0ZSh7XG4gICAgICAgIC8vICAgICAgICAgZHVyYXRpb246IHRoaXMuYW5pbWF0aW9uRHVyYXRpb24sXG4gICAgICAgIC8vICAgICAgICAgdHJhbnNsYXRlOiB7IHg6IDAsIHk6IDAgfSxcbiAgICAgICAgLy8gICAgICAgICBjdXJ2ZTogJ2Vhc2VJbidcbiAgICAgICAgLy8gICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAvLyAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgLy8gICAgIH0pO1xuICAgICAgICAvLyB9KTtcbiAgICB9XG5cbiAgICAvL09wZW4gc3ViIHNpZGUgZHJhd2VyIGFuaW1hdGlvblxuICAgIHB1YmxpYyBvcGVuU3ViU2lkZURyYXdlcigpIHtcbiAgICAgICAgdGhpcy5zdWJUb2dnbGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zdWJTaWRlRHJhd2VyLmFuaW1hdGUoe1xuICAgICAgICAgICAgZHVyYXRpb246IHRoaXMuYW5pbWF0aW9uRHVyYXRpb24sXG4gICAgICAgICAgICB0cmFuc2xhdGU6IHsgeDogMTMwLCB5OiAwIH0sXG4gICAgICAgICAgICBjdXJ2ZTogJ2Vhc2VPdXQnXG4gICAgICAgIH0pO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGxldCBsYXN0QnV0dG9uID0gdGhpcy5wYWdlLmdldFZpZXdCeUlkKHRoaXMucm91dGVyLnVybC50b0xvY2FsZUxvd2VyQ2FzZSgpKTtcbiAgICAgICAgICAgIGlmIChsYXN0QnV0dG9uKSB7XG4gICAgICAgICAgICAgICAgbGFzdEJ1dHRvbi5jbGFzc05hbWUgPSAnYXBwLWNvbG9yLXF1YXRlcm5hcnknO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBOYXRpdmUgZWxlbWVudHMgc2V0XG4gICAgcHVibGljIHNldE5hdGl2ZUVsZW1lbnRzKCkge1xuICAgICAgICB0aGlzLnNpZGVEcmF3ZXIgPSB0aGlzLnNpZGVEcmF3ZXJSZWYubmF0aXZlRWxlbWVudDtcbiAgICAgICAgdGhpcy5zdWJTaWRlRHJhd2VyID0gdGhpcy5zdWJTaWRlRHJhd2VyUmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgLy9WSUVXIENISUxEU1xuICAgIEBWaWV3Q2hpbGQoJ3NpZGVEcmF3ZXInKSBzaWRlRHJhd2VyUmVmOiBFbGVtZW50UmVmO1xuICAgIHByaXZhdGUgc2lkZURyYXdlcjtcbiAgICBAVmlld0NoaWxkKCdzdWJTaWRlRHJhd2VyJykgc3ViU2lkZURyYXdlclJlZjogRWxlbWVudFJlZjtcbiAgICBwcml2YXRlIHN1YlNpZGVEcmF3ZXI7XG59XG4iXX0=