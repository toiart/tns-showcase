"use strict";
var core_1 = require("@angular/core");
var dialogs = require("ui/dialogs");
var DialogsPage = (function () {
    function DialogsPage() {
    }
    //Alert dialog
    DialogsPage.prototype.alert = function (options) {
        if (options) {
            dialogs.alert({
                title: 'Your title',
                message: 'Your message',
                okButtonText: 'Your button text'
            }).then(function () {
                console.log('Dialog closed!');
            });
        }
        else {
            dialogs.alert('Your message').then(function () {
                console.log('Dialog closed!');
            });
        }
    };
    //Confirm dialog
    DialogsPage.prototype.confirm = function (options) {
        if (options) {
            dialogs.confirm({
                title: 'Your title',
                message: 'Your message',
                okButtonText: 'Your button text',
                cancelButtonText: 'Cancel text',
                neutralButtonText: 'Neutral text'
            }).then(function (result) {
                // RESULT IS BOOLEAN
                console.log('Dialog result: ' + result);
            });
        }
        else {
            dialogs.confirm('Your message').then(function (result) {
                console.log('Dialog result: ' + result);
            });
        }
    };
    // Prompt dialog
    DialogsPage.prototype.prompt = function (options) {
        if (options) {
            // inputType PROPERTY CAN BE dialogs.inputType.password OR dialogs.inputType.text.
            dialogs.prompt({
                title: 'Your title',
                message: 'Your message',
                okButtonText: 'Your button text',
                cancelButtonText: 'Cancel text',
                neutralButtonText: 'Neutral text',
                defaultText: 'Default text',
                inputType: dialogs.inputType.password
            }).then(function (r) {
                console.log('Dialog result: ' + r.result + ', text: ' + r.text);
            });
        }
        else {
            // SECOND ARGUMENT OPTIONAL
            dialogs.prompt('Your message', 'Default text').then(function (r) {
                console.log('Dialog result: ' + r.result + ', text: ' + r.text);
            });
        }
    };
    //Login dialog
    DialogsPage.prototype.login = function (options) {
        if (options) {
            dialogs.login({
                title: 'Your title',
                message: 'Your message',
                okButtonText: 'Your button text',
                cancelButtonText: 'Cancel button text',
                neutralButtonText: 'Neutral button text',
                userName: 'User name label text',
                password: 'Password label text'
            }).then(function (r) {
                console.log('Dialog result: ' + r.result + ', user: ' + r.userName + ', pwd: ' + r.password);
            });
        }
        else {
            // USER NAME AND PASSWORD OPTIONAL
            dialogs.login('Your message', 'User name label text', 'Password label text').then(function (r) {
                console.log('Dialog result: ' + r.result + ', user: ' + r.userName + ', pwd: ' + r.password);
            });
        }
    };
    //Action dialog
    DialogsPage.prototype.action = function (options) {
        if (options) {
            dialogs.action({
                message: 'Your message',
                cancelButtonText: 'Cancel text',
                actions: ['Option1', 'Option2']
            }).then(function (result) {
                console.log('Dialog result: ' + result);
            });
        }
        else {
            dialogs.action('Your message', 'Cancel button text', ['Option1', 'Option2']).then(function (result) {
                console.log('Dialog result: ' + result);
            });
        }
    };
    return DialogsPage;
}());
DialogsPage = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sc-dialogs-page',
        templateUrl: 'dialogs.html',
        styleUrls: ['dialogs.css']
    })
], DialogsPage);
exports.DialogsPage = DialogsPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9ncy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWFsb2dzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXdDO0FBQ3hDLG9DQUF1QztBQVF2QyxJQUFhLFdBQVc7SUFBeEI7SUFnR0EsQ0FBQztJQTlGRyxjQUFjO0lBQ1AsMkJBQUssR0FBWixVQUFhLE9BQWdCO1FBQ3pCLEVBQUUsQ0FBQSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDVCxPQUFPLENBQUMsS0FBSyxDQUFDO2dCQUNWLEtBQUssRUFBRSxZQUFZO2dCQUNuQixPQUFPLEVBQUUsY0FBYztnQkFDdkIsWUFBWSxFQUFFLGtCQUFrQjthQUNuQyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUNsQyxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLE9BQU8sQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDbEMsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO0lBQ0wsQ0FBQztJQUNELGdCQUFnQjtJQUNULDZCQUFPLEdBQWQsVUFBZSxPQUFnQjtRQUMzQixFQUFFLENBQUEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ1QsT0FBTyxDQUFDLE9BQU8sQ0FBQztnQkFDWixLQUFLLEVBQUUsWUFBWTtnQkFDbkIsT0FBTyxFQUFFLGNBQWM7Z0JBQ3ZCLFlBQVksRUFBRSxrQkFBa0I7Z0JBQ2hDLGdCQUFnQixFQUFFLGFBQWE7Z0JBQy9CLGlCQUFpQixFQUFFLGNBQWM7YUFDcEMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLE1BQU07Z0JBQ3BCLG9CQUFvQjtnQkFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxp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Z0JBQWdCLEVBQUUsYUFBYTtnQkFDL0IsT0FBTyxFQUFFLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQzthQUNsQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsTUFBTTtnQkFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxNQUFNLENBQUMsQ0FBQztZQUM1QyxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNSLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLG9CQUFvQixFQUFFLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsTUFBTTtnQkFDOUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxNQUFNLENBQUMsQ0FBQztZQUM1QyxDQUFDLENBQUMsQ0FBQztRQUNILENBQUM7SUFDTCxDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDLEFBaEdELElBZ0dDO0FBaEdZLFdBQVc7SUFOdkIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsaUJBQWlCO1FBQzNCLFdBQVcsRUFBRSxjQUFjO1FBQzNCLFNBQVMsRUFBRSxDQUFDLGFBQWEsQ0FBQztLQUM3QixDQUFDO0dBQ1csV0FBVyxDQWdHdkI7QUFoR1ksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgZGlhbG9ncyA9IHJlcXVpcmUoJ3VpL2RpYWxvZ3MnKTtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ3NjLWRpYWxvZ3MtcGFnZScsXG4gICAgdGVtcGxhdGVVcmw6ICdkaWFsb2dzLmh0bWwnLFxuICAgIHN0eWxlVXJsczogWydkaWFsb2dzLmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIERpYWxvZ3NQYWdlIHtcblxuICAgIC8vQWxlcnQgZGlhbG9nXG4gICAgcHVibGljIGFsZXJ0KG9wdGlvbnM6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYob3B0aW9ucykge1xuICAgICAgICAgICAgZGlhbG9ncy5hbGVydCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdZb3VyIHRpdGxlJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnWW91ciBtZXNzYWdlJyxcbiAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6ICdZb3VyIGJ1dHRvbiB0ZXh0J1xuICAgICAgICAgICAgfSkudGhlbigoKT0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRGlhbG9nIGNsb3NlZCEnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGlhbG9ncy5hbGVydCgnWW91ciBtZXNzYWdlJykudGhlbigoKT0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRGlhbG9nIGNsb3NlZCEnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vQ29uZmlybSBkaWFsb2dcbiAgICBwdWJsaWMgY29uZmlybShvcHRpb25zOiBib29sZWFuKSB7XG4gICAgICAgIGlmKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGRpYWxvZ3MuY29uZmlybSh7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdZb3VyIHRpdGxlJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnWW91ciBtZXNzYWdlJyxcbiAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6ICdZb3VyIGJ1dHRvbiB0ZXh0JyxcbiAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiAnQ2FuY2VsIHRleHQnLFxuICAgICAgICAgICAgICAgIG5ldXRyYWxCdXR0b25UZXh0OiAnTmV1dHJhbCB0ZXh0J1xuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgLy8gUkVTVUxUIElTIEJPT0xFQU5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRGlhbG9nIHJlc3VsdDogJyArIHJlc3VsdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRpYWxvZ3MuY29uZmlybSgnWW91ciBtZXNzYWdlJykudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEaWFsb2cgcmVzdWx0OiAnICsgcmVzdWx0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIFByb21wdCBkaWFsb2dcbiAgICBwdWJsaWMgcHJvbXB0KG9wdGlvbnM6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYob3B0aW9ucykge1xuICAgICAgICAgICAgLy8gaW5wdXRUeXBlIFBST1BFUlRZIENBTiBCRSBkaWFsb2dzLmlucHV0VHlwZS5wYXNzd29yZCBPUiBkaWFsb2dzLmlucHV0VHlwZS50ZXh0LlxuICAgICAgICAgICAgICAgIGRpYWxvZ3MucHJvbXB0KHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1lvdXIgdGl0bGUnLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdZb3VyIG1lc3NhZ2UnLFxuICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogJ1lvdXIgYnV0dG9uIHRleHQnLFxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdDYW5jZWwgdGV4dCcsXG4gICAgICAgICAgICAgICAgbmV1dHJhbEJ1dHRvblRleHQ6ICdOZXV0cmFsIHRleHQnLFxuICAgICAgICAgICAgICAgIGRlZmF1bHRUZXh0OiAnRGVmYXVsdCB0ZXh0JyxcbiAgICAgICAgICAgICAgICBpbnB1dFR5cGU6IGRpYWxvZ3MuaW5wdXRUeXBlLnBhc3N3b3JkXG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0RpYWxvZyByZXN1bHQ6ICcgKyByLnJlc3VsdCArICcsIHRleHQ6ICcgKyByLnRleHQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBTRUNPTkQgQVJHVU1FTlQgT1BUSU9OQUxcbiAgICAgICAgICAgIGRpYWxvZ3MucHJvbXB0KCdZb3VyIG1lc3NhZ2UnLCAnRGVmYXVsdCB0ZXh0JykudGhlbihyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRGlhbG9nIHJlc3VsdDogJyArIHIucmVzdWx0ICsgJywgdGV4dDogJyArIHIudGV4dCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvL0xvZ2luIGRpYWxvZ1xuICAgIHB1YmxpYyBsb2dpbihvcHRpb25zOiBib29sZWFuKSB7XG4gICAgICAgIGlmKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGRpYWxvZ3MubG9naW4oe1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnWW91ciB0aXRsZScsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1lvdXIgbWVzc2FnZScsXG4gICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiAnWW91ciBidXR0b24gdGV4dCcsXG4gICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogJ0NhbmNlbCBidXR0b24gdGV4dCcsXG4gICAgICAgICAgICAgICAgbmV1dHJhbEJ1dHRvblRleHQ6ICdOZXV0cmFsIGJ1dHRvbiB0ZXh0JyxcbiAgICAgICAgICAgICAgICB1c2VyTmFtZTogJ1VzZXIgbmFtZSBsYWJlbCB0ZXh0JyxcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogJ1Bhc3N3b3JkIGxhYmVsIHRleHQnXG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0RpYWxvZyByZXN1bHQ6ICcgKyByLnJlc3VsdCArICcsIHVzZXI6ICcgKyByLnVzZXJOYW1lICsgJywgcHdkOiAnICsgci5wYXNzd29yZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFVTRVIgTkFNRSBBTkQgUEFTU1dPUkQgT1BUSU9OQUxcbiAgICAgICAgICAgIGRpYWxvZ3MubG9naW4oJ1lvdXIgbWVzc2FnZScsICdVc2VyIG5hbWUgbGFiZWwgdGV4dCcsICdQYXNzd29yZCBsYWJlbCB0ZXh0JykudGhlbihmdW5jdGlvbiAocikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEaWFsb2cgcmVzdWx0OiAnICsgci5yZXN1bHQgKyAnLCB1c2VyOiAnICsgci51c2VyTmFtZSArICcsIHB3ZDogJyArIHIucGFzc3dvcmQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy9BY3Rpb24gZGlhbG9nXG4gICAgcHVibGljIGFjdGlvbihvcHRpb25zOiBib29sZWFuKSB7XG4gICAgICAgIGlmKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGRpYWxvZ3MuYWN0aW9uKHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnWW91ciBtZXNzYWdlJyxcbiAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiAnQ2FuY2VsIHRleHQnLFxuICAgICAgICAgICAgICAgIGFjdGlvbnM6IFsnT3B0aW9uMScsICdPcHRpb24yJ11cbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEaWFsb2cgcmVzdWx0OiAnICsgcmVzdWx0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICBkaWFsb2dzLmFjdGlvbignWW91ciBtZXNzYWdlJywgJ0NhbmNlbCBidXR0b24gdGV4dCcsIFsnT3B0aW9uMScsICdPcHRpb24yJ10pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0RpYWxvZyByZXN1bHQ6ICcgKyByZXN1bHQpO1xuICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==