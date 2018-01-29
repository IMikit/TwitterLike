import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { AlertComponent } from './directives/alert.component';
import { AuthGuard } from './guards/auth.guard';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { AlertService } from './services/alert.service';
import { AuthenticationService } from './services/authentication.service';
import { AccountService } from './services/account.service';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HeaderComponent } from './components/header/header.component';
import { LoadingModule } from 'ngx-loading';
import { SearchComponent } from './components/search/search.component';
import { ResultComponent } from './components/result/result.component';
import { CreateTweetComponent } from './components/create-tweet/create-tweet.component';
import { AuthTokenService } from './services/auth-token.service';
import { TweetService } from './services/tweet.service';
import { ShowTweetsComponent } from './components/show-tweets/show-tweets.component';

@NgModule({
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        HeaderComponent,
        SearchComponent,
        ResultComponent,
        CreateTweetComponent,
        ShowTweetsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        routing,
        LoadingModule
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        AuthTokenService,
        TweetService,
        AccountService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
