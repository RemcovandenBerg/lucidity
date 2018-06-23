import { Component, OnInit } from '@angular/core';
import { Query } from 'client/app/models/Query';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'client/app/data/data.service';

@Component({
  selector: 'lucid-query-details',
  templateUrl: './query-details.component.html',
  styleUrls: ['./query-details.component.scss']
})
export class QueryDetailsComponent {

  query: Query;
  errors: any;

  constructor(activatedRoute: ActivatedRoute, private dataService: DataService, private router: Router) {
    activatedRoute.data.subscribe( data => { this.query = data.query; });
  }

  delete(): void {
    this.dataService.deleteQuery(this.query).subscribe(
      () => this.router.navigate(['queries']),
      (err) => this.errors = err
    )
  }
}