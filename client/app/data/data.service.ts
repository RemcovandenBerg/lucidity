import { Input, Injectable } from "@angular/core";
import { Server } from "../models/server";
import { hostname } from "os";
import { of } from "rxjs/observable/of";
import { Observable } from "rxjs/Observable";
import { DatabaseType } from "../models/DatabaseType";
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

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
      let sr= new Server();
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
}
