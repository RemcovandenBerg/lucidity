import { Component, OnInit, Input } from "@angular/core";
import { Server } from "app/models/server";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-server-details",
  templateUrl: "./server-details.component.html",
  styleUrls: ["./server-details.component.scss"]
})

export class ServerDetailsComponent implements OnInit {

  @Input()
  server: Server;

  constructor(private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {

  }
}
