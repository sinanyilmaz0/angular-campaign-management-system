import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = "";
  password: string = "";

  constructor(private authService: AuthService, private toastr: ToastrService, private router: Router){}

  login(){
    const isLoggedIn = this.authService.login(this.email, this.password);
    if(isLoggedIn){
      this.router.navigate(['/campaigns']);
    }else{
      this.toastr.error('Email or password is incorrect!');
    }
  }
}
