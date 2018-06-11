import { Component, OnInit, Input } from "@angular/core";
import { Server } from "client/app/models/Server";
import { ActivatedRoute } from "@angular/router";
//import { DataService } from "../../../data/data.service";

@Component({
  selector: "app-server-details",
  templateUrl: "./server-details.component.html",
  styleUrls: ["./server-details.component.scss"],
  providers: []
})

export class ServerDetailsComponent implements OnInit {

  @Input()
  server: Server;

  constructor(private activatedRoute: ActivatedRoute) {
      activatedRoute.data.subscribe( data => this.server = data.server  );
    
    // activatedRoute.paramMap.subscribe(a => {
    //   service.getServer(a.get('id')).subscribe(s => 
    //     this.server = s);
    // });
  }

  ngOnInit() {

  }
}
