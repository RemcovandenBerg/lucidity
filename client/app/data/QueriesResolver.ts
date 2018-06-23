import { Injectable } from "@angular/core";
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { DataService } from "./data.service";
import { Observable } from "rxjs/Observable";
import { Query } from "client/app/models/Query";

@Injectable()
export class QueriesResolver implements Resolve<Query[]> {

  constructor(private dataService: DataService) { 

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Query[]> {
    return this.dataService.getAllQueries();
  }
}