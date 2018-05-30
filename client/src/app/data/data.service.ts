import { Input, Injectable } from "@angular/core";
import { Server } from "../models/server";
import { hostname } from "os";
import { of } from "rxjs/observable/of";
import { Observable } from "rxjs/Observable";
import { DatabaseType } from "../models/DatabaseType";

/**
 * @description
 * @class
 */

@Injectable()
export class DataService {

  serverlistmock: Server[] = [];

  obs: any;

  constructor() {
    let servera = new Server();
    let serverb = new Server();
    servera.hostname = 'plesk12.hostbeter.nl';
    servera.portnumber = 1433;
    servera.database = "pleskdb_234";
    servera.dbtype= DatabaseType.MariaDb;

    serverb.hostname = 'dev.hostbeter.com';
    serverb.database = 'dev.hostbeter';
    servera.portnumber = 1433;
    servera.dbtype = DatabaseType.SqlServerLinux;

    this.serverlistmock = [servera, serverb];

    this.obs = of(this.serverlistmock);
  }


  getAllServers(): Observable<Server[]> {
    return  this.obs ;
  }
  getServer(name: string): Server {
    if (!name)
      return null;
    return this.serverlistmock.find(a => a.name === name);
  }
}
