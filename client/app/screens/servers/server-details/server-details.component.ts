import { Component, OnInit, Input } from "@angular/core";
import { Server } from "client/app/models/Server";
import { ActivatedRoute, Router } from "@angular/router";
import { DataService } from "client/app/data/data.service";
import { DatabaseType } from "client/app/models/DatabaseType";

@Component({
  selector: "app-server-details",
  templateUrl: "./server-details.component.html",
  styleUrls: ["./server-details.component.scss"],
  providers: []
})

export class ServerDetailsComponent implements OnInit {

  server: Server;
  errors: any;

  serverTypeDescription: string;

  constructor(activatedRoute: ActivatedRoute, private dataService: DataService, private router: Router) {
    
      activatedRoute.data.subscribe( data => {this.server = data.server; 
        this.serverTypeDescription = DatabaseType[''+this.server.type];
      } );
  }

  delete(server: Server): void {
    this.dataService.deleteServer(server).subscribe(
      () => this.router.navigate(['servers']),
      (err) => this.errors = err
    )
  }

  ngOnInit() {

  }
}
