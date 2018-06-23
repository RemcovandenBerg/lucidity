import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { Server } from "../models/Server";
import { Query } from "../models/Query";
import { Sync } from "../models/Sync";
import { of } from "rxjs/observable/of";

@Injectable()
export class DataService {
  
  
  constructor(private http: HttpClient) {
  }

  private readonly serversApi = '/api/servers/';
  private readonly queriesApi = '/api/queries/'
  private readonly syncsApi = '/api/syncs/';

  /* Servers */

  getAllServers(): Observable<Server[]> {
    return this.http.get(this.serversApi).pipe( map( (obj: Server[]) => obj.map( (s) => Object.assign(new Server(), s)) ));
  }

  getServer(id: string): Observable<Server> {
    if (id=='0') return of(new Server());
    return this.http.get(this.serversApi+ encodeURIComponent(id))
      .pipe(map( obj=> Object.assign(new Server(), obj) )) as Observable<Server>;
  }

  saveServer(server: Server): Observable<any>{
    return this.http.post(this.serversApi, server);
  }
 
  deleteServer(server: Server): Observable<any>{
    return this.http.post(this.serversApi + encodeURIComponent(''+server.id) + '/delete/', server);
  }

  /* Queries */

  getAllQueries(): Observable<Query[]> {
    return this.http.get(this.queriesApi).pipe( map( (obj: Query[]) => obj.map( (s) => Object.assign(new Query(), s)) ));
  }
  
  getQuery(id: string) {
    if (id=='0') return of(new Query());
    return this.http.get(this.queriesApi + encodeURIComponent(id))
    .pipe(map( obj=> Object.assign(new Query(), obj) )) as Observable<Query>;
  }

  saveQuery(query: Query): Observable<any>{
    return this.http.post(this.queriesApi, query);
  }

  deleteQuery(query: Query){
    return this.http.post(this.queriesApi + encodeURIComponent(''+query.id) + '/delete/', query);
  }

  /* Syncs */

  getAllSyncs(): Observable<Sync[]> {
    return this.http.get(this.syncsApi) as Observable<Sync[]>;
  }

  getSync(id: string) {
    return this.http.get(this.syncsApi + encodeURIComponent(id)) as Observable<Sync>;
  }

  saveSync(sync: Sync) {
    return this.http.post(this.syncsApi, sync);
  }

  deleteSync(sync: Sync){
    return this.http.post(this.syncsApi + encodeURIComponent(''+sync.id) + '/delete/', sync);
  }

}
