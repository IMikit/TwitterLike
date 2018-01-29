import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '../../services/alert.service';
import { TweetService } from '../../services/tweet.service';
import { $ } from 'protractor';

@Component({
  selector: 'app-create-tweet',
  templateUrl: './create-tweet.component.html',
  styleUrls: ['./create-tweet.component.css']
})
export class CreateTweetComponent {
  model: any = {};
  loading = false;

  constructor(
    private router: Router,
    private alertService: AlertService,
    private tweetService: TweetService) { }

  send() {
    this.loading = true;
    this.tweetService.create(this.model)
      .subscribe(
      data => {
        this.loading = false;
        this.model = {};
      },
      error => {
        console.log(error);
        this.alertService.error(error.name);
        this.loading = false;
      });
  }

}
