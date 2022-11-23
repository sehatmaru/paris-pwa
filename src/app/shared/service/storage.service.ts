import { Injectable } from '@angular/core';

const ID = 'account.id';
const USERNAME = 'account.username';
const NAME = 'account.name';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public setLogin(username: string) {
		localStorage.setItem(USERNAME, username);
	}

	public removeLogged() {
		localStorage.removeItem(USERNAME);
	}

	public isLogged() {
		return localStorage.getItem(USERNAME) != null;
	}

	public getUsername() {
		return localStorage.getItem(USERNAME) ?? '';
	}

	public getId() {
		return localStorage.getItem(ID) ?? '';
	}

	public getName() {
		return localStorage.getItem(NAME) ?? '';
	}
}
