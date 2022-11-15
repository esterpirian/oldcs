
import { Component} from '@angular/core';
import { map, filter, tap } from 'rxjs/operators';
import { NgModule, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
    HttpClient,
    HTTP_INTERCEPTORS,
    HttpEvent,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpClientModule,
    HttpClientJsonpModule
  } from '@angular/common/http'
import { Observable } from 'rxjs'


@Injectable()
export class BOInterceptor {
    constructor() { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("intercepted request ... ");
      
        const authReq = req.clone({ headers: req.headers.set("headerName", "headerValue") });
        return next.handle(authReq).pipe(
            tap(event => {
                if (event instanceof HttpResponse) {
                 
                }
            }, error => {
                    console.error(' ERROR', error)
        })
            )
    }
}

@NgModule({
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: BOInterceptor, multi: true }
    ]
})
export class JsonpInterceptingModule { }
