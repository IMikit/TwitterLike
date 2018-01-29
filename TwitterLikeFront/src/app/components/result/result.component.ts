import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router/src/router';
import { AccountService } from '../../services/account.service';
import { AlertService } from '../../services/alert.service';
import { Account } from '../../models/account';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  private accounts: Account[];

  constructor(
    private route: ActivatedRoute,
    private accountService: AccountService,
    private alertService: AlertService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.accountService.getByName(params['name']).subscribe(r => {
        this.accounts = r;
      });
    });
  }

}
