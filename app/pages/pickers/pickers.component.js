"use strict";
var core_1 = require("@angular/core");
var content_service_1 = require("../../common/services/content.service");
var PickersPage = (function () {
    function PickersPage(_contentService) {
        this._contentService = _contentService;
        this.jedis = _contentService.getJedis();
    }
    PickersPage.prototype.selectedJediChange = function (args) {
        this.jediSelected = this.jedis[args.object.selectedIndex];
    };
    PickersPage.prototype.selectedDateChange = function (args) {
        this.date = this.padTwo(args.object.day) + '/' + this.padTwo(args.object.month) + '/' + args.object.year;
    };
    PickersPage.prototype.selectedTimeChange = function (args) {
        this.time = this.padTwo(args.object.hour) + ':' + this.padTwo(args.object.minute);
    };
    PickersPage.prototype.datePickerLoaded = function (args) {
        args.object.day = new Date(Date.now()).getDate();
        args.object.month = new Date(Date.now()).getMonth();
        args.object.year = new Date(Date.now()).getFullYear();
    };
    PickersPage.prototype.padTwo = function (n) {
        return (n < 10 ? '0' : '') + n;
    };
    return PickersPage;
}());
PickersPage = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sc-pickers-page',
        templateUrl: 'pickers.html',
        styleUrls: ['pickers.css']
    }),
    __metadata("design:paramtypes", [content_service_1.ContentService])
], PickersPage);
exports.PickersPage = PickersPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlja2Vycy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwaWNrZXJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXdDO0FBQ3hDLHlFQUFxRTtBQVFyRSxJQUFhLFdBQVc7SUFPcEIscUJBQW9CLGVBQStCO1FBQS9CLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUMvQyxJQUFJLENBQUMsS0FBSyxHQUFHLGVBQWUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM1QyxDQUFDO0lBRU0sd0NBQWtCLEdBQXpCLFVBQTBCLElBQUk7UUFDMUIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVNLHdDQUFrQixHQUF6QixVQUEwQixJQUFJO1FBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQzdHLENBQUM7SUFFTSx3Q0FBa0IsR0FBekIsVUFBMEIsSUFBSTtRQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RGLENBQUM7SUFFTSxzQ0FBZ0IsR0FBdkIsVUFBd0IsSUFBSTtRQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNqRCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNwRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUMxRCxDQUFDO0lBRU8sNEJBQU0sR0FBZCxVQUFlLENBQVM7UUFDcEIsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFDLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFTCxrQkFBQztBQUFELENBQUMsQUFqQ0QsSUFpQ0M7QUFqQ1ksV0FBVztJQU52QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxpQkFBaUI7UUFDM0IsV0FBVyxFQUFFLGNBQWM7UUFDM0IsU0FBUyxFQUFFLENBQUMsYUFBYSxDQUFDO0tBQzdCLENBQUM7cUNBUXVDLGdDQUFjO0dBUDFDLFdBQVcsQ0FpQ3ZCO0FBakNZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb250ZW50U2VydmljZX0gZnJvbSAnLi4vLi4vY29tbW9uL3NlcnZpY2VzL2NvbnRlbnQuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdzYy1waWNrZXJzLXBhZ2UnLFxuICAgIHRlbXBsYXRlVXJsOiAncGlja2Vycy5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsncGlja2Vycy5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQaWNrZXJzUGFnZSB7XG5cbiAgICBwcml2YXRlIGplZGlzOiBzdHJpbmdbXTtcbiAgICBwcml2YXRlIGplZGlTZWxlY3RlZDogc3RyaW5nO1xuICAgIHByaXZhdGUgZGF0ZTogc3RyaW5nO1xuICAgIHByaXZhdGUgdGltZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfY29udGVudFNlcnZpY2U6IENvbnRlbnRTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuamVkaXMgPSBfY29udGVudFNlcnZpY2UuZ2V0SmVkaXMoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2VsZWN0ZWRKZWRpQ2hhbmdlKGFyZ3MpIHtcbiAgICAgICAgdGhpcy5qZWRpU2VsZWN0ZWQgPSB0aGlzLmplZGlzW2FyZ3Mub2JqZWN0LnNlbGVjdGVkSW5kZXhdO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZWxlY3RlZERhdGVDaGFuZ2UoYXJncykge1xuICAgICAgICB0aGlzLmRhdGUgPSB0aGlzLnBhZFR3byhhcmdzLm9iamVjdC5kYXkpICsgJy8nICsgdGhpcy5wYWRUd28oYXJncy5vYmplY3QubW9udGgpICsgJy8nICsgYXJncy5vYmplY3QueWVhcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2VsZWN0ZWRUaW1lQ2hhbmdlKGFyZ3MpIHtcbiAgICAgICAgdGhpcy50aW1lID0gdGhpcy5wYWRUd28oYXJncy5vYmplY3QuaG91cikgKyAnOicgKyB0aGlzLnBhZFR3byhhcmdzLm9iamVjdC5taW51dGUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkYXRlUGlja2VyTG9hZGVkKGFyZ3MpIHtcbiAgICAgICAgYXJncy5vYmplY3QuZGF5ID0gbmV3IERhdGUoRGF0ZS5ub3coKSkuZ2V0RGF0ZSgpO1xuICAgICAgICBhcmdzLm9iamVjdC5tb250aCA9IG5ldyBEYXRlKERhdGUubm93KCkpLmdldE1vbnRoKCk7XG4gICAgICAgIGFyZ3Mub2JqZWN0LnllYXIgPSBuZXcgRGF0ZShEYXRlLm5vdygpKS5nZXRGdWxsWWVhcigpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcGFkVHdvKG46IG51bWJlcikge1xuICAgICAgICByZXR1cm4gKG48MTAgPyAnMCcgOiAnJykgKyBuO1xuICAgIH1cblxufVxuIl19