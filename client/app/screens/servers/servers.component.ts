import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { Server } from "../../models/Server";
import { DataService } from "../../data/data.service";

@Component({
    selector: "app-servers",
    providers: [DataService],
    templateUrl: "./servers.component.html",
    styleUrls: ["./servers.component.scss"],
    host: { class: 'main-container' }
})

export class ServersComponent implements OnInit {

    public serverlist: Observable<Server[]>;

    public editableServer: Server;

    constructor(private srv: DataService, ActivatedRoute) {

        //this.serverlist = this.srv.getAllServers();
    }

    ngOnInit() {
      this.refreshList();
    }

    public refreshList(){
      this.serverlist = this.srv.getAllServers();
    }

    public newServer(): void {
        this.editableServer = new Server();
    }

}
