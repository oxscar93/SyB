import { Injectable }             from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
}                                 from '@angular/router';
import { Observable, of, EMPTY }  from 'rxjs';
import { mergeMap, take }         from 'rxjs/operators';

//import {  BlockUI, NgBlockUI } from 'ng-block-ui';
import { Tip } from '../models/Tip';
import { TipSaludableService } from './tip-saludable.service';


 
@Injectable({
  providedIn: 'root',
})
export class TipSaludableResolverService implements Resolve<Array<Tip>> {
  //@BlockUI() blockUI: NgBlockUI;

  constructor(private tipService: TipSaludableService, private router: Router) {}
 
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<Tip>> | Observable<never> {
    //this.blockUI.start();
    return this.tipService.getTipList().pipe(
      mergeMap(tipList => {
        if (tipList) {
          //this.blockUI.stop();
          return of(tipList);
        } else { // id not found
          return EMPTY;
        }
      })
    );
  }
}