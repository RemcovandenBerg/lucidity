import { Component, OnInit, Input } from "@angular/core";
import { Server } from "app/models/server";
import { ActivatedRoute } from "@angular/router";
import { DataService } from "../../../data/data.service";

@Component({
  selector: "app-server-details",
  templateUrl: "./server-details.component.html",
  styleUrls: ["./server-details.component.scss"],
  providers: [DataService]
})

export class ServerDetailsComponent implements OnInit {

  @Input()
  server: Server;

  constructor(private activatedRoute: ActivatedRoute, srv: DataService) {
    activatedRoute.paramMap.subscribe(a => {
      this.server = srv.getServer(a.get('name'));
    });
  }

  ngOnInit() {

  }
}
