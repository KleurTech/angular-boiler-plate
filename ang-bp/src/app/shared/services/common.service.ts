import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import camelCaseRecursive from 'camelcase-keys';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonApiService } from './common-api.service';

@Injectable({
  providedIn: 'root',
})
export class CommonService {

  public baseUrl = environment.deployUrl;
  public baseUrlDeployed = environment.deployedUrl;
  configData: any = null;
  configReady$: Subject<any> = new Subject();

  constructor(public _http: HttpClient,
    private _snackBar: MatSnackBar,
    private _apiService: CommonApiService) {
    this.loadConfig();
  }

  loadConfig() {
    this._apiService.getConfig().subscribe((res) => {
      this.configData = res;
      this.configReady$.next(null);
    });
  }
  showSnackBar(message: string, action: string = '') {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

}