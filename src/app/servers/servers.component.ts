import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { Server } from "../models/server";

@Component({
    selector: "app-servers",
    templateUrl: "./servers.component.html",
    styleUrls: ["./servers.component.scss"],
    host: { class: 'main-container' }
})

export class ServersComponent implements OnInit {

    public serverlist = of( [
        {routerlink: 'plesk01', name: 'plesk01.hosbeter.nl' },
        {routerlink: 'plesk02', name: 'plesk02.hosbeter.nl' }
    ]);

    public selectedServer: Server;

    constructor() {

    }

    ngOnInit() {
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
