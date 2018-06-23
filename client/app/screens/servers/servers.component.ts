import { Component } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Server } from "../../models/Server";
import { ActivatedRoute } from "@angular/router";
import { of } from "rxjs/observable/of";

@Component({
    selector: "app-servers",
    templateUrl: "./servers.component.html",
    styleUrls: ["./servers.component.scss"],
    host: { class: 'main-container' }
})

export class ServersComponent {

    public serverlist: Observable<Server[]>;

    constructor(activatedRoute: ActivatedRoute) {
       activatedRoute.data.subscribe( data => this.serverlist = of(data.servers) );
    }

}
