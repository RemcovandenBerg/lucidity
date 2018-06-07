import { Input, Injectable } from "@angular/core";
import { of } from "rxjs/observable/of";
import { Observable } from "rxjs/Observable";
import { DatabaseType } from "../models/DatabaseType";
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { Server } from "../models/Server";
import { Query } from "../models/Query";
import { Sync } from "../models/Sync";

/**
 * @description
 * @class
 */

@Injectable()
export class DataService {

  constructor(private http: HttpClient) {
   //
  }

  getAllServers(): Observable<Server[]> {
    return this.http.get('/api/servers').pipe( map( (obj: any[]) => obj.map( (s) => {
      let sr = new Server();
      Object.assign(sr, s);
      return sr;
    })));
  }
  getServer(name: string): Server {
    if (!name)
      return null;
    return new Server();
   // return this.serverlistmock.find(a => a.name === name);
  }

  getAllQueries(): Observable<Query[]> {
    return this.http.get('/api/queries') as Observable<Query[]>;
  }

  getQuery(id: number) {
      return this.http.get('/api/queries/' + encodeURIComponent('' + id)) as Observable<Query>;
  }

  getAllSyncs(): Observable<Sync[]> {
    return this.http.get('/api/syncs') as Observable<Sync[]>;
  }

  getSync(id: number) {
      return this.http.get('/api/syncs/' + encodeURIComponent('' + id)) as Observable<Sync>;
  }


}
