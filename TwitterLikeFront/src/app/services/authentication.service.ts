import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';
import { AuthTokenService } from './auth-token.service';

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient, private tokenService: AuthTokenService) { }

    login(username: string, password: string) {
        return this.http.post<any>(environment.apiUrl + '/Token', 'grant_type=password&username=' + username + '&password=' + password)
            .map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.access_token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    this.tokenService.login(user.access_token);
                }

                return user;
            });
    }
}
