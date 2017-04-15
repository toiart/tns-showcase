"use strict";
var core_1 = require("@angular/core");
var content_service_1 = require("../../common/services/content.service");
var ContactsPage = (function () {
    function ContactsPage(_contentService) {
        this._contentService = _contentService;
        this.modalToggled = false;
        this.toggled = false;
        this.selected = 0;
        this.contacts = _contentService.getContacts();
    }
    ContactsPage.prototype.ngAfterViewInit = function () {
        this.setNativeElements();
        this.modal.opacity = 0;
    };
    //Opens detail modal
    ContactsPage.prototype.itemTap = function (args) {
        this.selected = args.index;
        this.toggled = true;
        this.modalToggled = true;
    };
    //Closes detail modal
    ContactsPage.prototype.closeModal = function () {
        var _this = this;
        this.modalToggled = false;
        setTimeout(function () { _this.toggled = false; }, 400);
    };
    //Get elements from the UI
    ContactsPage.prototype.setNativeElements = function () {
        this.modal = this.modalRef.nativeElement;
    };
    return ContactsPage;
}());
__decorate([
    core_1.ViewChild('modal'),
    __metadata("design:type", core_1.ElementRef)
], ContactsPage.prototype, "modalRef", void 0);
ContactsPage = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sc-contacts-page',
        templateUrl: 'contacts.html',
        styleUrls: ['contacts.css'],
        animations: [
            core_1.trigger('state', [
                core_1.state('inactiveModal', core_1.style({ opacity: '0' })),
                core_1.state('activeModal', core_1.style({ opacity: '1' })),
                core_1.transition('inactiveModal => activeModal', [core_1.animate('300ms ease-out')]),
                core_1.transition('activeModal => inactiveModal', [core_1.animate('300ms ease-out')]),
                core_1.state('inactiveBD', core_1.style({ opacity: '0' })),
                core_1.state('activeBD', core_1.style({ opacity: '.3' })),
                core_1.transition('inactiveBD => activeBD', [core_1.animate('300ms ease-out')]),
                core_1.transition('activeBD => inactiveBD', [core_1.animate('300ms ease-out')]),
            ])
        ]
    }),
    __metadata("design:paramtypes", [content_service_1.ContentService])
], ContactsPage);
exports.ContactsPage = ContactsPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29udGFjdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBMEg7QUFDMUgseUVBQXFFO0FBb0JyRSxJQUFhLFlBQVk7SUFVckIsc0JBQW9CLGVBQStCO1FBQS9CLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQVAzQyxpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUM5QixZQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pCLGFBQVEsR0FBVyxDQUFDLENBQUM7UUFNekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbEQsQ0FBQztJQUVELHNDQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUNELG9CQUFvQjtJQUNiLDhCQUFPLEdBQWQsVUFBZSxJQUFJO1FBQ2YsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO0lBQzdCLENBQUM7SUFDRCxxQkFBcUI7SUFDZCxpQ0FBVSxHQUFqQjtRQUFBLGlCQUdDO1FBRkcsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUIsVUFBVSxDQUFDLGNBQVEsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUNELDBCQUEwQjtJQUNsQix3Q0FBaUIsR0FBekI7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDO0lBQzdDLENBQUM7SUFDTCxtQkFBQztBQUFELENBQUMsQUFqQ0QsSUFpQ0M7QUExQnVCO0lBQW5CLGdCQUFTLENBQUMsT0FBTyxDQUFDOzhCQUFtQixpQkFBVTs4Q0FBQztBQVB4QyxZQUFZO0lBbEJ4QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxrQkFBa0I7UUFDNUIsV0FBVyxFQUFFLGVBQWU7UUFDNUIsU0FBUyxFQUFFLENBQUMsY0FBYyxDQUFDO1FBQzNCLFVBQVUsRUFBRTtZQUNSLGNBQU8sQ0FBQyxPQUFPLEVBQUU7Z0JBQ2IsWUFBSyxDQUFDLGVBQWUsRUFBRSxZQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztnQkFDL0MsWUFBSyxDQUFDLGFBQWEsRUFBRSxZQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztnQkFDN0MsaUJBQVUsQ0FBQyw4QkFBOEIsRUFBRSxDQUFDLGNBQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZFLGlCQUFVLENBQUMsOEJBQThCLEVBQUUsQ0FBQyxjQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO2dCQUN2RSxZQUFLLENBQUMsWUFBWSxFQUFFLFlBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO2dCQUM1QyxZQUFLLENBQUMsVUFBVSxFQUFFLFlBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO2dCQUMzQyxpQkFBVSxDQUFDLHdCQUF3QixFQUFFLENBQUMsY0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztnQkFDakUsaUJBQVUsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDLGNBQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7YUFDcEUsQ0FBQztTQUNMO0tBQ0osQ0FBQztxQ0FXdUMsZ0NBQWM7R0FWMUMsWUFBWSxDQWlDeEI7QUFqQ1ksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBhbmltYXRlLCB0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIEFmdGVyVmlld0luaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb250ZW50U2VydmljZX0gZnJvbSAnLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbnRlbnQuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdzYy1jb250YWN0cy1wYWdlJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2NvbnRhY3RzLmh0bWwnLFxuICAgIHN0eWxlVXJsczogWydjb250YWN0cy5jc3MnXSxcbiAgICBhbmltYXRpb25zOiBbXG4gICAgICAgIHRyaWdnZXIoJ3N0YXRlJywgW1xuICAgICAgICAgICAgc3RhdGUoJ2luYWN0aXZlTW9kYWwnLCBzdHlsZSh7IG9wYWNpdHk6ICcwJyB9KSksXG4gICAgICAgICAgICBzdGF0ZSgnYWN0aXZlTW9kYWwnLCBzdHlsZSh7IG9wYWNpdHk6ICcxJyB9KSksXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCdpbmFjdGl2ZU1vZGFsID0+IGFjdGl2ZU1vZGFsJywgW2FuaW1hdGUoJzMwMG1zIGVhc2Utb3V0JyldKSxcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJ2FjdGl2ZU1vZGFsID0+IGluYWN0aXZlTW9kYWwnLCBbYW5pbWF0ZSgnMzAwbXMgZWFzZS1vdXQnKV0pLFxuICAgICAgICAgICAgc3RhdGUoJ2luYWN0aXZlQkQnLCBzdHlsZSh7IG9wYWNpdHk6ICcwJyB9KSksXG4gICAgICAgICAgICBzdGF0ZSgnYWN0aXZlQkQnLCBzdHlsZSh7IG9wYWNpdHk6ICcuMycgfSkpLFxuICAgICAgICAgICAgdHJhbnNpdGlvbignaW5hY3RpdmVCRCA9PiBhY3RpdmVCRCcsIFthbmltYXRlKCczMDBtcyBlYXNlLW91dCcpXSksXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCdhY3RpdmVCRCA9PiBpbmFjdGl2ZUJEJywgW2FuaW1hdGUoJzMwMG1zIGVhc2Utb3V0JyldKSxcbiAgICAgICAgXSlcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIENvbnRhY3RzUGFnZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG4gICAgcHJpdmF0ZSBjb250YWN0czogYW55W107XG4gICAgcHJpdmF0ZSBtb2RhbFRvZ2dsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIHRvZ2dsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIHNlbGVjdGVkOiBudW1iZXIgPSAwO1xuXG4gICAgQFZpZXdDaGlsZCgnbW9kYWwnKSBwcml2YXRlIG1vZGFsUmVmOiBFbGVtZW50UmVmO1xuICAgIHByaXZhdGUgbW9kYWw7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jb250ZW50U2VydmljZTogQ29udGVudFNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5jb250YWN0cyA9IF9jb250ZW50U2VydmljZS5nZXRDb250YWN0cygpO1xuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5zZXROYXRpdmVFbGVtZW50cygpO1xuICAgICAgICB0aGlzLm1vZGFsLm9wYWNpdHkgPSAwO1xuICAgIH1cbiAgICAvL09wZW5zIGRldGFpbCBtb2RhbFxuICAgIHB1YmxpYyBpdGVtVGFwKGFyZ3MpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IGFyZ3MuaW5kZXg7XG4gICAgICAgIHRoaXMudG9nZ2xlZCA9IHRydWU7XG4gICAgICAgIHRoaXMubW9kYWxUb2dnbGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgLy9DbG9zZXMgZGV0YWlsIG1vZGFsXG4gICAgcHVibGljIGNsb3NlTW9kYWwoKSB7XG4gICAgICAgIHRoaXMubW9kYWxUb2dnbGVkID0gZmFsc2U7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLnRvZ2dsZWQgPSBmYWxzZTsgfSwgNDAwKTtcbiAgICB9XG4gICAgLy9HZXQgZWxlbWVudHMgZnJvbSB0aGUgVUlcbiAgICBwcml2YXRlIHNldE5hdGl2ZUVsZW1lbnRzKCkge1xuICAgICAgICB0aGlzLm1vZGFsID0gdGhpcy5tb2RhbFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIH1cbn1cbiJdfQ==