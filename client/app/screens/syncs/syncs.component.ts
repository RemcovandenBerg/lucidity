import { Component, OnInit } from "@angular/core";
import { Sync } from "client/app/models/Sync";
import { Observable } from "rxjs/Observable";
import { ActivatedRoute } from "@angular/router";
import { of } from "rxjs/observable/of";

@Component({
  selector: "app-syncs",
  templateUrl: "./syncs.component.html",
  styleUrls: ["./syncs.component.scss"],
  host: { class: 'main-container' }
})

export class SyncsComponent implements OnInit {

  public synclist: Observable<Sync[]>;

  constructor(activatedRoute: ActivatedRoute) {
     activatedRoute.data.subscribe( data => this.synclist = of(data.syncs) );
  }
  
  ngOnInit() {

  }
}
