import { Injectable }             from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
}                                 from '@angular/router';
import { Observable, of, EMPTY }  from 'rxjs';
import { mergeMap, take }         from 'rxjs/operators';

//import {  BlockUI, NgBlockUI } from 'ng-block-ui';
import { ContactoService } from './contacto.service';
import { Contacto } from './contacto';

 
@Injectable({
  providedIn: 'root',
})
export class ContactoResolverService implements Resolve<Contacto> {
  //@BlockUI() blockUI: NgBlockUI;

  constructor(private contactoService: ContactoService, private router: Router) {}
 
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Contacto> | Observable<never> {
    //this.blockUI.start();
    return this.contactoService.getContactoInfo().pipe(
      mergeMap(contactoInfo => {
        if (contactoInfo) {
          //this.blockUI.stop();
          return of(contactoInfo);
        } else { // id not found
          return EMPTY;
        }
      })
    );
  }
}