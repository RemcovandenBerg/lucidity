import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { Server } from "../../models/server";
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

    public selectedServer: Server;

    constructor(private srv: DataService) {

    }

    ngOnInit() {
        this.serverlist = this.srv.getAllServers();
        // this.serverlist = [
        //     {routerlink: 'plesk01', title : 'plesk01.hosbeter.nl' },
        //      {routerlink: 'plesk02', title : 'plesk02.hosbeter.nl' }
        //  ];
    }

    public newServer(): void {
        this.selectedServer = this.serverlist[0];
        alert('YOYO servertje');
    }

}
