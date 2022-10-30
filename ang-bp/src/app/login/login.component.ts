import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonApiService } from '../shared/services/common-api.service';
import { CommonService } from '../shared/services/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userId: any;
  userPassword: any;
  constructor(public _route: Router, public _commonService: CommonService, private _apiService: CommonApiService) { }

  ngOnInit(): void { }
  loginUser() {
    this._apiService.loginUser(this.userId, this.userPassword).subscribe({
      next: (res) => {
        sessionStorage.setItem("userEmailId", this.userId)
        sessionStorage.setItem("userId", res.id)
        sessionStorage.setItem("userLoggedIn", "true")
        this._route.navigate(['/home']);
      },
      error: () => {
        this._commonService.showSnackBar("Invalid Credentials");
      }
    });
  }
  newUserRedirect() {
    this._route.navigate(['/new-user-login']);
  }
}
