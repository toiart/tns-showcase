"use strict";
var core_1 = require("@angular/core");
var ExitModalComponent = (function () {
    function ExitModalComponent() {
        this.close = new core_1.EventEmitter();
        this.toggled = false;
    }
    ExitModalComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () { return _this.toggled = true; }, 100);
    };
    ExitModalComponent.prototype.closeModal = function () {
        var _this = this;
        this.toggled = false;
        setTimeout(function () { return _this.close.emit(false); }, 400);
    };
    ExitModalComponent.prototype.exitApp = function () {
        global.process.exit();
    };
    return ExitModalComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ExitModalComponent.prototype, "close", void 0);
ExitModalComponent = __decorate([
    core_1.Component({
        selector: 'exit-modal',
        templateUrl: 'common/components/exit-modal/exit-modal.component.html',
        styleUrls: ['common/components/exit-modal/exit-modal.component.css'],
        animations: [
            core_1.trigger('state', [
                core_1.state('inactiveModal', core_1.style({ transform: 'scale(0,0)' })),
                core_1.state('activeModal', core_1.style({ transform: 'scale(1,1)' })),
                core_1.transition('inactiveModal => activeModal', [core_1.animate('300ms ease-out')]),
                core_1.transition('activeModal => inactiveModal', [core_1.animate('300ms ease-out')]),
                core_1.state('inactiveBD', core_1.style({ opacity: '0' })),
                core_1.state('activeBD', core_1.style({ opacity: '.3' })),
                core_1.transition('inactiveBD => activeBD', [core_1.animate('300ms ease-out')]),
                core_1.transition('activeBD => inactiveBD', [core_1.animate('300ms ease-out')]),
            ])
        ]
    }),
    __metadata("design:paramtypes", [])
], ExitModalComponent);
exports.ExitModalComponent = ExitModalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhpdC1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJleGl0LW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQWlKO0FBbUJqSixJQUFhLGtCQUFrQjtJQUszQjtRQUhVLFVBQUssR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUM3QixZQUFPLEdBQVksS0FBSyxDQUFDO0lBR2pDLENBQUM7SUFFRCw0Q0FBZSxHQUFmO1FBQUEsaUJBRUM7UUFERyxVQUFVLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxFQUFuQixDQUFtQixFQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFTSx1Q0FBVSxHQUFqQjtRQUFBLGlCQUlDO1FBSEcsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsVUFBVSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBdEIsQ0FBc0IsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUVsRCxDQUFDO0lBRU0sb0NBQU8sR0FBZDtRQUNJLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUNMLHlCQUFDO0FBQUQsQ0FBQyxBQXJCRCxJQXFCQztBQW5CYTtJQUFULGFBQU0sRUFBRTs7aURBQTRCO0FBRjVCLGtCQUFrQjtJQWpCOUIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxZQUFZO1FBQ3RCLFdBQVcsRUFBRSx3REFBd0Q7UUFDckUsU0FBUyxFQUFFLENBQUMsdURBQXVELENBQUM7UUFDcEUsVUFBVSxFQUFFO1lBQ1IsY0FBTyxDQUFDLE9BQU8sRUFBRTtnQkFDYixZQUFLLENBQUMsZUFBZSxFQUFFLFlBQUssQ0FBQyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDO2dCQUMxRCxZQUFLLENBQUMsYUFBYSxFQUFFLFlBQUssQ0FBQyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDO2dCQUN4RCxpQkFBVSxDQUFDLDhCQUE4QixFQUFFLENBQUMsY0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztnQkFDdkUsaUJBQVUsQ0FBQyw4QkFBOEIsRUFBRSxDQUFDLGNBQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZFLFlBQUssQ0FBQyxZQUFZLEVBQUUsWUFBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBQzVDLFlBQUssQ0FBQyxVQUFVLEVBQUUsWUFBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7Z0JBQzNDLGlCQUFVLENBQUMsd0JBQXdCLEVBQUUsQ0FBQyxjQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO2dCQUNqRSxpQkFBVSxDQUFDLHdCQUF3QixFQUFFLENBQUMsY0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQzthQUNwRSxDQUFDO1NBQ0w7S0FDSixDQUFDOztHQUNXLGtCQUFrQixDQXFCOUI7QUFyQlksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPdXRwdXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBBZnRlclZpZXdJbml0LCBhbmltYXRlLCB0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2V4aXQtbW9kYWwnLFxuICAgIHRlbXBsYXRlVXJsOiAnY29tbW9uL2NvbXBvbmVudHMvZXhpdC1tb2RhbC9leGl0LW1vZGFsLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnY29tbW9uL2NvbXBvbmVudHMvZXhpdC1tb2RhbC9leGl0LW1vZGFsLmNvbXBvbmVudC5jc3MnXSxcbiAgICBhbmltYXRpb25zOiBbXG4gICAgICAgIHRyaWdnZXIoJ3N0YXRlJywgW1xuICAgICAgICAgICAgc3RhdGUoJ2luYWN0aXZlTW9kYWwnLCBzdHlsZSh7IHRyYW5zZm9ybTogJ3NjYWxlKDAsMCknIH0pKSxcbiAgICAgICAgICAgIHN0YXRlKCdhY3RpdmVNb2RhbCcsIHN0eWxlKHsgdHJhbnNmb3JtOiAnc2NhbGUoMSwxKScgfSkpLFxuICAgICAgICAgICAgdHJhbnNpdGlvbignaW5hY3RpdmVNb2RhbCA9PiBhY3RpdmVNb2RhbCcsIFthbmltYXRlKCczMDBtcyBlYXNlLW91dCcpXSksXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCdhY3RpdmVNb2RhbCA9PiBpbmFjdGl2ZU1vZGFsJywgW2FuaW1hdGUoJzMwMG1zIGVhc2Utb3V0JyldKSxcbiAgICAgICAgICAgIHN0YXRlKCdpbmFjdGl2ZUJEJywgc3R5bGUoeyBvcGFjaXR5OiAnMCcgfSkpLFxuICAgICAgICAgICAgc3RhdGUoJ2FjdGl2ZUJEJywgc3R5bGUoeyBvcGFjaXR5OiAnLjMnIH0pKSxcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJ2luYWN0aXZlQkQgPT4gYWN0aXZlQkQnLCBbYW5pbWF0ZSgnMzAwbXMgZWFzZS1vdXQnKV0pLFxuICAgICAgICAgICAgdHJhbnNpdGlvbignYWN0aXZlQkQgPT4gaW5hY3RpdmVCRCcsIFthbmltYXRlKCczMDBtcyBlYXNlLW91dCcpXSksXG4gICAgICAgIF0pXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBFeGl0TW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuICAgIEBPdXRwdXQoKSBjbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBwcml2YXRlIHRvZ2dsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnRvZ2dsZWQgPSB0cnVlICwgMTAwKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xvc2VNb2RhbCgpIHtcbiAgICAgICAgdGhpcy50b2dnbGVkID0gZmFsc2U7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5jbG9zZS5lbWl0KGZhbHNlKSwgNDAwKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBleGl0QXBwKCkge1xuICAgICAgICBnbG9iYWwucHJvY2Vzcy5leGl0KCk7XG4gICAgfVxufVxuIl19