import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { Server } from "../models/Server";
import { Query } from "../models/Query";
import { Sync } from "../models/Sync";

@Injectable()
export class DataService {
  
  constructor(private http: HttpClient) {
  }

  private readonly serversApi = '/api/servers/';
  private readonly queriesApi = '/api/queries/'
  private readonly syncsApi = '/api/syncs/';

   getAllServers(): Observable<Server[]> {
    return this.http.get(this.serversApi).pipe( map( (obj: Server[]) => obj.map( (s) => Object.assign(new Server(), s)) ));
  }

  getServer(id: string): Observable<Server> {
    return this.http.get(this.serversApi+ encodeURIComponent(id))
      .pipe(map( obj=> Object.assign(new Server(), obj) )) as Observable<Server>;
  }

  saveServer(server: Server): Observable<any>{
    return this.http.post(this.serversApi, server);
  }
 

  getAllQueries(): Observable<Query[]> {
    return this.http.get(this.queriesApi) as Observable<Query[]>;
  }
  
  getQuery(id: string) {
    return this.http.get(this.queriesApi + encodeURIComponent(id)) as Observable<Query>;
  }

  saveQuery(query: Query): Observable<any>{
    return this.http.post(this.queriesApi, query);
  }

  getAllSyncs(): Observable<Sync[]> {
    return this.http.get(this.syncsApi) as Observable<Sync[]>;
  }

  getSync(id: string) {
    return this.http.get(this.syncsApi + encodeURIComponent(id)) as Observable<Sync>;
  }

  saveSync(sync: Sync) {
    return this.http.post(this.syncsApi, sync);
  }

}
