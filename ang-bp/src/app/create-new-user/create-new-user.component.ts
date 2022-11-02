import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonApiService } from '../shared/services/common-api.service';
import { CommonService } from '../shared/services/common.service';

@Component({
  selector: 'app-create-new-user',
  templateUrl: './create-new-user.component.html',
  styleUrls: ['./create-new-user.component.scss']
})
export class CreateNewUserComponent implements OnInit {
  userId: string = "";
  userPassword: string = "";
  userRePassword: string = "";
  userName: string = "";
  custRelCode: string = "";

  constructor(public _route: Router, public _commonService: CommonService, private _apiService: CommonApiService) { }

  ngOnInit(): void {
  }
  createUser() {
    if (this.custRelCode === "ABBY101") {
      //   this._commonService.createUser(this.userName, this.userId, this.userPassword).subscribe({
      //     next: (res) => {
      sessionStorage.setItem("userEmailId", this.userId)
      // sessionStorage.setItem("userId", res.id)
      sessionStorage.setItem("userLoggedIn", "true")
      this._route.navigate(['/home']);
      //     },
      //   });
    }
  }
}
