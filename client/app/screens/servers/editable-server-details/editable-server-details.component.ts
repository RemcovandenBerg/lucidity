import { Component, OnInit, Input } from "@angular/core";
import { Server } from "client/app/models/Server";

@Component({
  selector: "app-editable-server-details",
  templateUrl: "./editable-server-details.component.html",
  styleUrls: ["./editable-server-details.component.scss"]
})

export class EditableServerDetailsComponent implements OnInit {

  @Input()
  public server: Server;

  constructor() {

  }

  ngOnInit() {

  }
}
