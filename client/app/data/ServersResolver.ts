import { Injectable } from "@angular/core";
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { DataService } from "./data.service";
import { Observable } from "rxjs/Observable";
import { Server } from "client/app/models/Server";

@Injectable()
export class ServersResolver implements Resolve<Server[]> {

  constructor(private dataService: DataService) { 

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server[]> {
    return this.dataService.getAllServers();
  }
}