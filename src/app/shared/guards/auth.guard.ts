import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree, } from '@angular/router';
import { Observable } from 'rxjs/';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    if (this.authenticationService.loggedIn()) {
      return true;
    } else {
      return this.router.parseUrl('/admin/login');
    }
  }
}
