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
import { CategoriaService } from './categoria.service';
import { ComedorService } from '../comedor/comedor.service';
import { ComedorImg } from '../models/Comedor';
import { CategoriaAddResolver } from './categoria';

 
@Injectable({
  providedIn: 'root',
})
export class MenuComedorAddResolverService implements Resolve<CategoriaAddResolver> {
  //@BlockUI() blockUI: NgBlockUI;

  constructor(private comedorService: ComedorService, private router: Router) {}
 
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CategoriaAddResolver> | Observable<never> {
    let comedorId= route.queryParams['comedorId']

    return this.comedorService.getComedorImage(new Number(comedorId)).pipe(
      mergeMap(comedorImg => {
        if (comedorImg) {
          return of(new CategoriaAddResolver(comedorId, comedorImg));
        } else { // id not found
          return EMPTY;
        }
      })
    );
  }
}