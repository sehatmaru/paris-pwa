import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {
	constructor(private router: Router) {}

	canActivate(): boolean {
		if (!localStorage.getItem('account.username')) {
			this.router.navigate(['']);

			return false;
		}
    
		return true;
	}
}
