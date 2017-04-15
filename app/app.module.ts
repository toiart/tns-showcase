import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { AppRoutingModule, routableComponents } from "./app.routing";
import { AppComponent } from "./app.component";
import { SIDEDRAWER_DIRECTIVES } from 'nativescript-telerik-ui-pro/sidedrawer/angular';
import { CHART_DIRECTIVES } from 'nativescript-telerik-ui-pro/chart/angular';
import { ContentService } from './common/services/content.service';
import { ShowcaseLayout } from './common/components/showcase-layout/showcase-layout.component';
import { SideDrawerComponent } from './common/components/side-drawer/side-drawer.component';
import { ExitModalComponent } from './common/components/exit-modal/exit-modal.component';

import { RetailerService } from "./pages/retailer/retailer.service";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptHttpModule
    ],
    declarations: [
        AppComponent,
        ShowcaseLayout,
        SideDrawerComponent,
        ExitModalComponent,
        SIDEDRAWER_DIRECTIVES,
        CHART_DIRECTIVES,
        ...routableComponents,
    ],
    providers: [
        RetailerService,
        ContentService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
