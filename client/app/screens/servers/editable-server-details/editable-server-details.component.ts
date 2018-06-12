import { ActivatedRoute } from "@angular/router";
import { FormControl } from '@angular/forms';
import { Component, OnInit, Input } from "@angular/core";
import { Server } from "client/app/models/Server";
import { DataService } from "../../../data/data.service";


@Component({
  selector: "app-editable-server-details",
  templateUrl: "./editable-server-details.component.html",
  styleUrls: ["./editable-server-details.component.scss"]
})

export class EditableServerDetailsComponent implements OnInit {

  @Input()
  server: Server;

  constructor(private activatedRoute: ActivatedRoute, service: DataService<Server>) {
    activatedRoute.paramMap.subscribe(a => {
      let id = a.get('id');
      if (id === "0")
        this.server = new Server(); //new create
      else 
        service.getServer(a.get('id')).subscribe( s => this.server = s);
    });
  }

  ngOnInit() {

  }

  public onSave(){
    //iets emitten en opslaan etc/
  }
  
  public onCancel(){
    window.history.back();
  }
}
