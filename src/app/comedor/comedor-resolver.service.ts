import { Injectable }             from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
}                                 from '@angular/router';
import { Observable, of, EMPTY }  from 'rxjs';
import { mergeMap, take }         from 'rxjs/operators';

//import {  BlockUI, NgBlockUI } from 'ng-block-ui';
import { Comedor } from '../models/Comedor';
import { ComedorService } from './comedor.service';


 
@Injectable({
  providedIn: 'root',
})
export class ComedorResolverService implements Resolve<Array<Comedor>> {
  //@BlockUI() blockUI: NgBlockUI;

  constructor(private comedorService: ComedorService, private router: Router) {}
 
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<Comedor>> | Observable<never> {
    //this.blockUI.start();
    return this.comedorService.getComedorList().pipe(
      mergeMap(comedorList => {
        if (comedorList) {
          //this.blockUI.stop();
          return of(comedorList);
        } else { // id not found
          return EMPTY;
        }
      })
    );
  }
}