import { Component} from '@angular/core';

import { Router, NavigationStart, NavigationEnd } from "@angular/router";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
  styleUrls: ['./app.componennt.scss'],
    providers: []
})
export class AppComponent {
   
  

    constructor(private router: Router) {
        this.router.navigateByUrl('/turn');

       
    }

   

}
