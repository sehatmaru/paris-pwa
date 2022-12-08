import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/shared/service/storage.service';
import { AuthService } from '../../sevice/auth.service';
import { Util } from 'src/app/shared/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;

  authModel = {
    username: '',
    password: ''
  }

  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private util: Util,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (this.storageService.isLogged()) this.toHome()
  }

  doLogin() {
    if (this.authService.checkAuth(this.authModel)) {
      this.storageService.setLogin(this.authModel.username);
      this.toHome()
    } else this.util.showSnackbar('Username/Password Salah', 'OK')
  }

  toHome() {
    this.router.navigate(['home'])
  }

}
