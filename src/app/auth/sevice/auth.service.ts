import { Injectable } from '@angular/core';

const USERNAME = 'user';
const PASSWORD = 'user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  checkAuth(body: any): boolean {
    return body.username === USERNAME && body.password === PASSWORD
  }
}
