import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }


login(login: Object): Observable<Object> {
  debugger;
  // return this.http.post('https://localhost:44390/users/authenticate', login);  //change by anjali for map nodejs api
  return this.http.post('http://localhost:3000/users/login', login);
}

logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
}
}
