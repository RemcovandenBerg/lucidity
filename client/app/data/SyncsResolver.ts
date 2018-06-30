import { Injectable } from "@angular/core";
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { DataService } from "./data.service";
import { Observable } from "rxjs/Observable";
import { Sync } from "client/app/models/Sync";

@Injectable()
export class SyncsResolver implements Resolve<Sync[]> {

  constructor(private dataService: DataService) { 

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Sync[]> {
    return this.dataService.getAllSyncs();
  }
}
