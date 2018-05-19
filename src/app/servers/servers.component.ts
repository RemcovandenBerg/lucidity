import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";

@Component({
    selector: "app-servers",
    templateUrl: "./servers.component.html",
    styleUrls: ["./servers.component.scss"]
})

export class ServersComponent implements OnInit {

    public serverlist = of( [
        {routerlink: 'plesk01', title: 'plesk01.hosbeter.nl' },
        {routerlink: 'plesk02', title: 'plesk02.hosbeter.nl' }
    ]);

    constructor() {

    }

    ngOnInit() {
            // this.serverlist = [
           //     {routerlink: 'plesk01', title : 'plesk01.hosbeter.nl' },
          //      {routerlink: 'plesk02', title : 'plesk02.hosbeter.nl' }
          //  ];
    }

    public newServer(): void {
        alert('YOYO servertje');
    }

}
