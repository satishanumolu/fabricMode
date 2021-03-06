import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { UserService } from "../../services/user.service";

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  private user: any = {};
  private errorMessage: any = '';

  constructor(private navCtrl: NavController, private userService: UserService) {

  }

  signUp() {
    this.userService.register(this.user)
      .subscribe((res) => {
        this.navCtrl.push(LoginPage);
      }, (err) => {
        this.errorMessage = err.error;
      });
  }
}
