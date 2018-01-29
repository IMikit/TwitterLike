import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '../../services/alert.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  model: any = {};
  loading = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private alertService: AlertService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.model.message = params['name']
    });
  }

  search() {
    this.router.navigate(['/search/' + this.model.message]);
  }
}
