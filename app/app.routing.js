"use strict";
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var splash_screen_component_1 = require("./common/components/splash-screen/splash-screen.component");
var accelerometer_component_1 = require("./pages/accelerometer/accelerometer.component");
var signaturepad_component_1 = require("./pages/signaturepad/signaturepad.component");
var codescanner_component_1 = require("./pages/codescanner/codescanner.component");
var retailers_component_1 = require("./pages/retailer/retailers.component");
var indicators_component_1 = require("./pages/indicators/indicators.component");
var animations_component_1 = require("./pages/animations/animations.component");
var selectors_component_1 = require("./pages/selectors/selectors.component");
var contacts_component_1 = require("./pages/contacts/contacts.component");
var settings_component_1 = require("./pages/settings/settings.component");
var database_component_1 = require("./pages/database/database.component");
var location_component_1 = require("./pages/location/location.component");
var buttons_component_1 = require("./pages/buttons/buttons.component");
var pickers_component_1 = require("./pages/pickers/pickers.component");
var layouts_component_1 = require("./pages/layouts/layouts.component");
var dialogs_component_1 = require("./pages/dialogs/dialogs.component");
var wrapper_component_1 = require("./pages/wrapper.component");
var images_component_1 = require("./pages/images/images.component");
var camera_component_1 = require("./pages/camera/camera.component");
var charts_component_1 = require("./pages/charts/charts.component");
var views_component_1 = require("./pages/views/views.component");
var login_component_1 = require("./pages/login/login.component");
var table_component_1 = require("./pages/table/table.component");
var lists_component_1 = require("./pages/lists/lists.component");
var tasks_component_1 = require("./pages/tasks/tasks.component");
var home_component_1 = require("./pages/home/home.component");
var text_component_1 = require("./pages/text/text.component");
exports.routableComponents = [];
exports.routes = [
    { path: "", redirectTo: "/splash", pathMatch: "full" },
    routeEntry({
        path: 'home', component: wrapper_component_1.WrapperComponent,
        children: [
            routeEntry({ path: '', component: home_component_1.HomePage }),
            routeEntry({ path: 'buttons', component: buttons_component_1.ButtonsPage }),
            routeEntry({ path: 'text', component: text_component_1.TextPage }),
            routeEntry({ path: 'lists', component: lists_component_1.ListsPage }),
            routeEntry({ path: 'pickers', component: pickers_component_1.PickersPage }),
            routeEntry({ path: 'layouts', component: layouts_component_1.LayoutsPage }),
            routeEntry({ path: 'selectors', component: selectors_component_1.SelectorsPage }),
            routeEntry({ path: 'indicators', component: indicators_component_1.IndicatorsPage }),
            routeEntry({ path: 'images', component: images_component_1.ImagesPage }),
            routeEntry({ path: 'views', component: views_component_1.ViewsPage }),
            routeEntry({ path: 'dialogs', component: dialogs_component_1.DialogsPage }),
            routeEntry({ path: 'login', component: login_component_1.LoginPage }),
            routeEntry({ path: 'contacts', component: contacts_component_1.ContactsPage }),
            routeEntry({ path: 'table', component: table_component_1.TablePage }),
            routeEntry({ path: 'settings', component: settings_component_1.SettingsPage }),
            routeEntry({ path: 'database', component: database_component_1.DatabasePage }),
            routeEntry({ path: 'camera', component: camera_component_1.CameraPage }),
            routeEntry({ path: 'codescanner', component: codescanner_component_1.CodeScannerPage }),
            routeEntry({ path: 'signaturepad', component: signaturepad_component_1.SignaturePadPage }),
            routeEntry({ path: 'location', component: location_component_1.LocationPage }),
            routeEntry({ path: 'charts', component: charts_component_1.ChartsPage }),
            routeEntry({ path: 'accelerometer', component: accelerometer_component_1.AccelerometerPage }),
            routeEntry({ path: 'animations', component: animations_component_1.AnimationsPage }),
            routeEntry({ path: 'tasks', component: tasks_component_1.TasksPage }),
            routeEntry({ path: 'retailers', component: retailers_component_1.RetailersComponent })
        ]
    }),
    routeEntry({ path: 'splash', component: splash_screen_component_1.SplashScreenComponent })
];
// const routes: Routes = [
//     { path: "", redirectTo: "/retailers", pathMatch: "full" },
//     routeEntry({ path: 'retailers', component: RetailersComponent })
// ];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.NativeScriptRouterModule.forRoot(exports.routes)],
        exports: [router_1.NativeScriptRouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
function routeEntry(data) {
    exports.routableComponents.push(data.component);
    return data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXlDO0FBRXpDLHNEQUF1RTtBQUV2RSxxR0FBZ0c7QUFDaEcseUZBQWdGO0FBQ2hGLHNGQUE2RTtBQUM3RSxtRkFBMEU7QUFDMUUsNEVBQXdFO0FBQ3hFLGdGQUF1RTtBQUN2RSxnRkFBdUU7QUFDdkUsNkVBQW9FO0FBQ3BFLDBFQUFpRTtBQUNqRSwwRUFBaUU7QUFDakUsMEVBQWlFO0FBQ2pFLDBFQUFpRTtBQUNqRSx1RUFBOEQ7QUFDOUQsdUVBQThEO0FBQzlELHVFQUE4RDtBQUM5RCx1RUFBOEQ7QUFDOUQsK0RBQTJEO0FBQzNELG9FQUEyRDtBQUMzRCxvRUFBMkQ7QUFDM0Qsb0VBQTJEO0FBQzNELGlFQUF3RDtBQUN4RCxpRUFBd0Q7QUFDeEQsaUVBQXdEO0FBQ3hELGlFQUF3RDtBQUN4RCxpRUFBd0Q7QUFDeEQsOERBQXFEO0FBQ3JELDhEQUFxRDtBQUUxQyxRQUFBLGtCQUFrQixHQUFHLEVBQUUsQ0FBQztBQUN0QixRQUFBLE1BQU0sR0FBVztJQUMxQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0lBQ3RELFVBQVUsQ0FBQztRQUNQLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLG9DQUFnQjtRQUN6QyxRQUFRLEVBQUU7WUFDTixVQUFVLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSx5QkFBUSxFQUFFLENBQUM7WUFDN0MsVUFBVSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsK0JBQVcsRUFBRSxDQUFDO1lBQ3ZELFVBQVUsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLHlCQUFRLEVBQUUsQ0FBQztZQUNqRCxVQUFVLENBQUMsRUFB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Q1csZ0JBQWdCLENBQUk7QUFBcEIsNENBQWdCO0FBRTdCLG9CQUFvQixJQUFJO0lBQ3BCLDBCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDeEMsTUFBTSxDQUFDLElBQUksQ0FBQztBQUNoQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQge1NwbGFzaFNjcmVlbkNvbXBvbmVudH0gZnJvbSAnLi9jb21tb24vY29tcG9uZW50cy9zcGxhc2gtc2NyZWVuL3NwbGFzaC1zY3JlZW4uY29tcG9uZW50JztcbmltcG9ydCB7QWNjZWxlcm9tZXRlclBhZ2V9IGZyb20gJy4vcGFnZXMvYWNjZWxlcm9tZXRlci9hY2NlbGVyb21ldGVyLmNvbXBvbmVudCc7XG5pbXBvcnQge1NpZ25hdHVyZVBhZFBhZ2V9IGZyb20gJy4vcGFnZXMvc2lnbmF0dXJlcGFkL3NpZ25hdHVyZXBhZC5jb21wb25lbnQnO1xuaW1wb3J0IHtDb2RlU2Nhbm5lclBhZ2V9IGZyb20gJy4vcGFnZXMvY29kZXNjYW5uZXIvY29kZXNjYW5uZXIuY29tcG9uZW50JztcbmltcG9ydCB7UmV0YWlsZXJzQ29tcG9uZW50fSBmcm9tIFwiLi9wYWdlcy9yZXRhaWxlci9yZXRhaWxlcnMuY29tcG9uZW50XCI7XG5pbXBvcnQge0luZGljYXRvcnNQYWdlfSBmcm9tICcuL3BhZ2VzL2luZGljYXRvcnMvaW5kaWNhdG9ycy5jb21wb25lbnQnO1xuaW1wb3J0IHtBbmltYXRpb25zUGFnZX0gZnJvbSAnLi9wYWdlcy9hbmltYXRpb25zL2FuaW1hdGlvbnMuY29tcG9uZW50JztcbmltcG9ydCB7U2VsZWN0b3JzUGFnZX0gZnJvbSAnLi9wYWdlcy9zZWxlY3RvcnMvc2VsZWN0b3JzLmNvbXBvbmVudCc7XG5pbXBvcnQge0NvbnRhY3RzUGFnZX0gZnJvbSAnLi9wYWdlcy9jb250YWN0cy9jb250YWN0cy5jb21wb25lbnQnO1xuaW1wb3J0IHtTZXR0aW5nc1BhZ2V9IGZyb20gJy4vcGFnZXMvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50JztcbmltcG9ydCB7RGF0YWJhc2VQYWdlfSBmcm9tICcuL3BhZ2VzL2RhdGFiYXNlL2RhdGFiYXNlLmNvbXBvbmVudCc7XG5pbXBvcnQge0xvY2F0aW9uUGFnZX0gZnJvbSAnLi9wYWdlcy9sb2NhdGlvbi9sb2NhdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHtCdXR0b25zUGFnZX0gZnJvbSAnLi9wYWdlcy9idXR0b25zL2J1dHRvbnMuY29tcG9uZW50JztcbmltcG9ydCB7UGlja2Vyc1BhZ2V9IGZyb20gJy4vcGFnZXMvcGlja2Vycy9waWNrZXJzLmNvbXBvbmVudCc7XG5pbXBvcnQge0xheW91dHNQYWdlfSBmcm9tICcuL3BhZ2VzL2xheW91dHMvbGF5b3V0cy5jb21wb25lbnQnO1xuaW1wb3J0IHtEaWFsb2dzUGFnZX0gZnJvbSAnLi9wYWdlcy9kaWFsb2dzL2RpYWxvZ3MuY29tcG9uZW50JztcbmltcG9ydCB7V3JhcHBlckNvbXBvbmVudH0gZnJvbSAnLi9wYWdlcy93cmFwcGVyLmNvbXBvbmVudCc7XG5pbXBvcnQge0ltYWdlc1BhZ2V9IGZyb20gJy4vcGFnZXMvaW1hZ2VzL2ltYWdlcy5jb21wb25lbnQnO1xuaW1wb3J0IHtDYW1lcmFQYWdlfSBmcm9tICcuL3BhZ2VzL2NhbWVyYS9jYW1lcmEuY29tcG9uZW50JztcbmltcG9ydCB7Q2hhcnRzUGFnZX0gZnJvbSAnLi9wYWdlcy9jaGFydHMvY2hhcnRzLmNvbXBvbmVudCc7XG5pbXBvcnQge1ZpZXdzUGFnZX0gZnJvbSAnLi9wYWdlcy92aWV3cy92aWV3cy5jb21wb25lbnQnO1xuaW1wb3J0IHtMb2dpblBhZ2V9IGZyb20gJy4vcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50JztcbmltcG9ydCB7VGFibGVQYWdlfSBmcm9tICcuL3BhZ2VzL3RhYmxlL3RhYmxlLmNvbXBvbmVudCc7XG5pbXBvcnQge0xpc3RzUGFnZX0gZnJvbSAnLi9wYWdlcy9saXN0cy9saXN0cy5jb21wb25lbnQnO1xuaW1wb3J0IHtUYXNrc1BhZ2V9IGZyb20gJy4vcGFnZXMvdGFza3MvdGFza3MuY29tcG9uZW50JztcbmltcG9ydCB7SG9tZVBhZ2V9IGZyb20gJy4vcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudCc7XG5pbXBvcnQge1RleHRQYWdlfSBmcm9tICcuL3BhZ2VzL3RleHQvdGV4dC5jb21wb25lbnQnO1xuXG5leHBvcnQgdmFyIHJvdXRhYmxlQ29tcG9uZW50cyA9IFtdO1xuZXhwb3J0IGNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHsgcGF0aDogXCJcIiwgcmVkaXJlY3RUbzogXCIvc3BsYXNoXCIsIHBhdGhNYXRjaDogXCJmdWxsXCIgfSxcbiAgICByb3V0ZUVudHJ5KHtcbiAgICAgICAgcGF0aDogJ2hvbWUnLCBjb21wb25lbnQ6IFdyYXBwZXJDb21wb25lbnQsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICByb3V0ZUVudHJ5KHsgcGF0aDogJycsIGNvbXBvbmVudDogSG9tZVBhZ2UgfSksXG4gICAgICAgICAgICByb3V0ZUVudHJ5KHsgcGF0aDogJ2J1dHRvbnMnLCBjb21wb25lbnQ6IEJ1dHRvbnNQYWdlIH0pLFxuICAgICAgICAgICAgcm91dGVFbnRyeSh7IHBhdGg6ICd0ZXh0JywgY29tcG9uZW50OiBUZXh0UGFnZSB9KSxcbiAgICAgICAgICAgIHJvdXRlRW50cnkoeyBwYXRoOiAnbGlzdHMnLCBjb21wb25lbnQ6IExpc3RzUGFnZSB9KSxcbiAgICAgICAgICAgIHJvdXRlRW50cnkoeyBwYXRoOiAncGlja2VycycsIGNvbXBvbmVudDogUGlja2Vyc1BhZ2UgfSksXG4gICAgICAgICAgICByb3V0ZUVudHJ5KHsgcGF0aDogJ2xheW91dHMnLCBjb21wb25lbnQ6IExheW91dHNQYWdlIH0pLFxuICAgICAgICAgICAgcm91dGVFbnRyeSh7IHBhdGg6ICdzZWxlY3RvcnMnLCBjb21wb25lbnQ6IFNlbGVjdG9yc1BhZ2UgfSksXG4gICAgICAgICAgICByb3V0ZUVudHJ5KHsgcGF0aDogJ2luZGljYXRvcnMnLCBjb21wb25lbnQ6IEluZGljYXRvcnNQYWdlIH0pLFxuICAgICAgICAgICAgcm91dGVFbnRyeSh7IHBhdGg6ICdpbWFnZXMnLCBjb21wb25lbnQ6IEltYWdlc1BhZ2UgfSksXG4gICAgICAgICAgICByb3V0ZUVudHJ5KHsgcGF0aDogJ3ZpZXdzJywgY29tcG9uZW50OiBWaWV3c1BhZ2UgfSksXG4gICAgICAgICAgICByb3V0ZUVudHJ5KHsgcGF0aDogJ2RpYWxvZ3MnLCBjb21wb25lbnQ6IERpYWxvZ3NQYWdlIH0pLFxuICAgICAgICAgICAgcm91dGVFbnRyeSh7IHBhdGg6ICdsb2dpbicsIGNvbXBvbmVudDogTG9naW5QYWdlIH0pLFxuICAgICAgICAgICAgcm91dGVFbnRyeSh7IHBhdGg6ICdjb250YWN0cycsIGNvbXBvbmVudDogQ29udGFjdHNQYWdlIH0pLFxuICAgICAgICAgICAgcm91dGVFbnRyeSh7IHBhdGg6ICd0YWJsZScsIGNvbXBvbmVudDogVGFibGVQYWdlIH0pLFxuICAgICAgICAgICAgcm91dGVFbnRyeSh7IHBhdGg6ICdzZXR0aW5ncycsIGNvbXBvbmVudDogU2V0dGluZ3NQYWdlIH0pLFxuICAgICAgICAgICAgcm91dGVFbnRyeSh7IHBhdGg6ICdkYXRhYmFzZScsIGNvbXBvbmVudDogRGF0YWJhc2VQYWdlIH0pLFxuICAgICAgICAgICAgcm91dGVFbnRyeSh7IHBhdGg6ICdjYW1lcmEnLCBjb21wb25lbnQ6IENhbWVyYVBhZ2UgfSksXG4gICAgICAgICAgICByb3V0ZUVudHJ5KHsgcGF0aDogJ2NvZGVzY2FubmVyJywgY29tcG9uZW50OiBDb2RlU2Nhbm5lclBhZ2UgfSksXG4gICAgICAgICAgICByb3V0ZUVudHJ5KHsgcGF0aDogJ3NpZ25hdHVyZXBhZCcsIGNvbXBvbmVudDogU2lnbmF0dXJlUGFkUGFnZSB9KSxcbiAgICAgICAgICAgIHJvdXRlRW50cnkoeyBwYXRoOiAnbG9jYXRpb24nLCBjb21wb25lbnQ6IExvY2F0aW9uUGFnZSB9KSxcbiAgICAgICAgICAgIHJvdXRlRW50cnkoeyBwYXRoOiAnY2hhcnRzJywgY29tcG9uZW50OiBDaGFydHNQYWdlIH0pLFxuICAgICAgICAgICAgcm91dGVFbnRyeSh7IHBhdGg6ICdhY2NlbGVyb21ldGVyJywgY29tcG9uZW50OiBBY2NlbGVyb21ldGVyUGFnZSB9KSxcbiAgICAgICAgICAgIHJvdXRlRW50cnkoeyBwYXRoOiAnYW5pbWF0aW9ucycsIGNvbXBvbmVudDogQW5pbWF0aW9uc1BhZ2UgfSksXG4gICAgICAgICAgICByb3V0ZUVudHJ5KHsgcGF0aDogJ3Rhc2tzJywgY29tcG9uZW50OiBUYXNrc1BhZ2UgfSksXG4gICAgICAgICAgICByb3V0ZUVudHJ5KHsgcGF0aDogJ3JldGFpbGVycycsIGNvbXBvbmVudDogUmV0YWlsZXJzQ29tcG9uZW50IH0pXG4gICAgICAgIF1cbiAgICB9KSxcbiAgICByb3V0ZUVudHJ5KHsgcGF0aDogJ3NwbGFzaCcsIGNvbXBvbmVudDogU3BsYXNoU2NyZWVuQ29tcG9uZW50IH0pXG5dO1xuXG4vLyBjb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbi8vICAgICB7IHBhdGg6IFwiXCIsIHJlZGlyZWN0VG86IFwiL3JldGFpbGVyc1wiLCBwYXRoTWF0Y2g6IFwiZnVsbFwiIH0sXG4vLyAgICAgcm91dGVFbnRyeSh7IHBhdGg6ICdyZXRhaWxlcnMnLCBjb21wb25lbnQ6IFJldGFpbGVyc0NvbXBvbmVudCB9KVxuLy8gXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7IH1cblxuZnVuY3Rpb24gcm91dGVFbnRyeShkYXRhKSB7XG4gICAgcm91dGFibGVDb21wb25lbnRzLnB1c2goZGF0YS5jb21wb25lbnQpO1xuICAgIHJldHVybiBkYXRhO1xufVxuIl19