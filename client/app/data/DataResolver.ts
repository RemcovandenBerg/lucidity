import { Injectable } from "@angular/core";
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { DataService } from "./data.service";
import { Observable } from "rxjs/Observable";
import { observeOn } from "rxjs/operators";
import { of } from "rxjs/observable/of";

@Injectable()
export class DataResolver implements Resolve<any> {

  constructor(private dataService: DataService) { 

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    
    let id = route.paramMap.get('id');
    debugger;
    if (id == '0')
      return of({});
    
    if (state.url.indexOf('servers/details/') > -1) 
      return this.dataService.getServer(id);
    if (state.url.indexOf('queries/details/') > -1) 
      return this.dataService.getQuery(id);
    if (state.url.indexOf('syncs/details/') > -1) 
      return this.dataService.getSync(id);
    throw Error('App Error in DataResolver.');
  }

  

}