import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService } from '../../services/alert.service';
import { AuthenticationService } from '../../services/authentication.service';
import { AuthTokenService } from '../../services/auth-token.service';

@Component({
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private tokenService: AuthTokenService,
        private alertService: AlertService) { }

    ngOnInit() {
        // reset login status
        this.tokenService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.model.email, this.model.password)
            .subscribe(
            data => {
                this.router.navigate([this.returnUrl]);
            },
            error => {
                console.log(error);
                this.alertService.error(error.name);
                this.loading = false;
            });
    }
}
