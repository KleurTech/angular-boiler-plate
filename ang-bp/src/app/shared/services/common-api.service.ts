import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import camelCaseRecursive from 'camelcase-keys';

@Injectable({
  providedIn: 'root'
})
export class CommonApiService {


  public baseUrl = environment.deployUrl;
  public baseUrlDeployed = environment.deployedUrl;

  constructor(public _http: HttpClient) {
  }

  getConfig(): Observable<any> {
    return this._http.get(`${this.baseUrlDeployed}/config`).pipe(
      map(n => camelCaseRecursive(n))
    );
  }

  loginUser(userName: string, password: string): Observable<any> {
    return this._http.post(`${this.baseUrlDeployed}Users/Login`, {
      userName,
      password,
    }).pipe(
      map(n => camelCaseRecursive(n))
    );
  }
}
