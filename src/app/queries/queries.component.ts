import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-queries",
  templateUrl: "./queries.component.html",
  styleUrls: ["./queries.component.scss"],
  host: { class: 'main-container' }
})

export class QueriesComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {

  }

  newQuery() {
      alert('qry');
  }
}
