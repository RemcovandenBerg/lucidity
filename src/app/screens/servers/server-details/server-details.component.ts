import { Component, OnInit, Input } from "@angular/core";
import { Server } from "app/models/server";
import { ActivatedRoute } from "@angular/router";
import { DataService } from "../../../data/data.service";

@Component({
  selector: "app-server-details",
  templateUrl: "./server-details.component.html",
  styleUrls: ["./server-details.component.scss"]
})

export class ServerDetailsComponent implements OnInit {

  @Input()
  server: Server;

  constructor(private activatedRoute: ActivatedRoute, srv: DataService) {
    activatedRoute.paramMap.subscribe(a => {
      let nameParam = a.get('name');
      this.server = srv.getServer(nameParam);
    });
  }

  ngOnInit() {

  }
}
