import { Component } from "@angular/core";
import {Router} from '@angular/router';
import {Page} from 'ui/page';

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})
export class AppComponent { 
    constructor(page: Page, private router: Router) {
        page.actionBarHidden = true;
        router.events.subscribe((e) => {
            console.log('[Route Event] - ' + e.toString());
        });
    }
}
