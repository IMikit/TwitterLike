import { Component, OnInit } from '@angular/core';
import { TweetService } from '../../services/tweet.service';
import { Tweet } from '../../models/tweet';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-tweets',
  templateUrl: './show-tweets.component.html',
  styleUrls: ['./show-tweets.component.css']
})
export class ShowTweetsComponent implements OnInit {

  private tweets: Tweet[];

  constructor(private route: ActivatedRoute,
    private tweetService: TweetService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      console.log(id);
      if (id) {
        this.tweetService.getByAccountId(id).subscribe(data => {
          this.tweets = data;
        });
      } else {
        this.tweetService.getAll().subscribe(data => {
          this.tweets = data;
        });
      }
    });
  }

}
