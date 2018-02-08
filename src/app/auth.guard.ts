import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { OrchardDataService } from './orchard-data.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private _orchardService: OrchardDataService) {

  }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
     if (JSON.parse(window.sessionStorage.getItem('role')) === 'lead') {
       return true;
    }


    return false;
  }
}
