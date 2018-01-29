import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Account } from '../models/account';
import { environment } from '../../environments/environment';

@Injectable()
export class AccountService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Account[]>(environment.apiUrl + '/api/accounts');
    }

    getByName(name: string) {
        return this.http.get<Account[]>(environment.apiUrl + '/api/accounts?name=' + name);
    }

    create(user: Account) {
        return this.http.post(environment.apiUrl + '/api/accounts', user);
    }

    update(user: Account) {
        return this.http.put(environment.apiUrl + '/api/accounts/' + user.Id, user);
    }

    delete(id: number) {
        return this.http.delete(environment.apiUrl + '/api/accounts/' + id);
    }
}
