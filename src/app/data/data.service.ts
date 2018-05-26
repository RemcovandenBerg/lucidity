import { Input, Injectable } from "@angular/core";
import { Server } from "../models/server";
import { hostname } from "os";
import { of } from "rxjs/observable/of";
import { Observable } from "rxjs/Observable";

/**
 * @description
 * @class
 */

@Injectable()
export class DataService {

  serverlistmock: Server[] = [];

  constructor() {
    let servera = new Server();
    let serverb = new Server();
    servera.hostname = 'plesk12.hostbeter.nl';
    serverb.hostname = 'dev.hostbeter.com';
    this.serverlistmock = [servera, serverb];
  }


  getAllServers(): Observable<Server[]> {
    return of(this.serverlistmock);
  }
  getServer(name: string): Server {
    if (!name)
      return null;
    return this.serverlistmock.find(a => a.name === name);
  }
}
