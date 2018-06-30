import { Component, OnInit } from "@angular/core";
import { Sync } from "client/app/models/Sync";
import { ActivatedRoute, Router } from "@angular/router";
import { DataService } from "client/app/data/data.service";

@Component({
  selector: "app-sync-details",
  templateUrl: "./sync-details.component.html",
  styleUrls: ["./sync-details.component.scss"]
})

export class SyncDetailsComponent {
  
  sync: Sync;
  errors: any;

  constructor(activatedRoute: ActivatedRoute, private dataService: DataService, private router: Router) {
    
      activatedRoute.data.subscribe( data => { 
        this.sync = data.sync; 
      } );
  }

  delete(): void {
    this.dataService.deleteSync(this.sync).subscribe(
      () => this.router.navigate(['syncs']),
      (err) => this.errors = err
    );
  }

}
