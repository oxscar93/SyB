import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpResponse,
    HttpErrorResponse
   } from '@angular/common/http';
   import { Observable, throwError } from 'rxjs';
   import { retry, catchError } from 'rxjs/operators';
   import { ToasterService } from 'angular2-toaster';
   import { Injectable } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

   @Injectable()
   export class HttpErrorInterceptor implements HttpInterceptor {
    @BlockUI() blockUI: NgBlockUI;
    
    constructor(private toasterService: ToasterService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next.handle(request)
        .pipe(
          retry(1),
          catchError((error: HttpErrorResponse) => {
            let errorMessage = '';
            if (error.error instanceof ErrorEvent) {
              // client-side error
              errorMessage = `Error: ${error.error.message}`;
            } else {
              // server-side error
              errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
            }
            this.blockUI.stop(); //good?
            this.toasterService.pop("error", "Error Interno", errorMessage);
            return throwError(errorMessage);
          })
        )
    }
   }