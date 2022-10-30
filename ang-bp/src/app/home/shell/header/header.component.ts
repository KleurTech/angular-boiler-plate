import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public _router: Router) { }

  ngOnInit(): void { }
  goHome() {
    this._router.navigate(['/home']);
  }
  redirectToURL(route: string) {
    if (route !== 'login') {
      this._router.navigate([`/home/apps/${route}`]);
    }
    sessionStorage.clear();
    this._router.navigate([`/${route}`]);
  }
}
