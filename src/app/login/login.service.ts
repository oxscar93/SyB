import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { map,catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
   })

export class LoginService {
  constructor(private http:HttpClient) { }

  base = environment.baseServiceUrl;

  signIn(user) : Observable<{}> {
    return this.getLoginServiceResponse(user)
    .pipe(
      map(r => {
        return this.handleSignInResponse(r);       
    }))
}

logOut(){
  localStorage.removeItem('currentUser');
}

private getLoginServiceResponse(user) : Observable<any> {
    return this.http.post(this.base + "/login-user", user);
}

private handleSignInResponse(res: any){
    if (res.loggedIn && res.user.userRole != "ADMIN"){
      return {signedIn: false, error: "El usuario no tiene permisos para ingresar."};
    }

    if (res.loggedIn) {
        localStorage.setItem('currentUser', JSON.stringify(res.user));
        return {signedIn: true, error: null};
    }else {
        return {signedIn: false, error: "Usuario o contraseña invalídas."};
    }  
}
}