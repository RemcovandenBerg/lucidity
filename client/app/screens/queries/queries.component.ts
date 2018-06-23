import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Query } from "client/app/models/Query";
import { ActivatedRoute } from "@angular/router";
import { of } from "rxjs/observable/of";

@Component({
  selector: "app-queries",
  templateUrl: "./queries.component.html",
  styleUrls: ["./queries.component.scss"],
  host: { class: 'main-container' }
})

export class QueriesComponent {

  public queries: Observable<Query[]>;

  constructor(activatedRoute: ActivatedRoute) {
     activatedRoute.data.subscribe( data => this.queries = of(data.queries) );
  }

}
