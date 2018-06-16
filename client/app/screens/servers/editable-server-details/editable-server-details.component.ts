import { ActivatedRoute, Router } from "@angular/router";
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Input } from "@angular/core";
import { Server } from "client/app/models/Server";
import { DatabaseType } from "client/app/models/DatabaseType";
import { DataService } from "../../../data/data.service";


@Component({
  selector: "app-editable-server-details",
  templateUrl: "./editable-server-details.component.html",
  styleUrls: ["./editable-server-details.component.scss"]
})

export class EditableServerDetailsComponent {
 
  public server: Server;

  public serverForm: FormGroup;
  
  //options list
  public dbtypeValues = Object.keys(DatabaseType).map(v => DatabaseType[v]);
  
  public serverErrors: any;

  constructor(private service: DataService, private router: Router, activatedRoute: ActivatedRoute, fb: FormBuilder) {
    this.serverForm = this.initForm(fb);
    activatedRoute.paramMap.subscribe(a => {
      let id = a.get('id');
      if (id === "0") 
        this.writeServerAndSetForm( new Server());     
      else 
        service.getServer(a.get('id')).subscribe(s => this.writeServerAndSetForm(s));
    });
  }

  private initForm(fb: FormBuilder): any {
    return fb.group({ 
      id: 0,
      hostname: ['', Validators.required],
      portnumber: [1433, Validators.required],
      database: ['', Validators.required],
      type: [DatabaseType.SqlServer, Validators.required],
      rowVersion: '',
    });
  }

  private writeServerAndSetForm(server: Server):void {
    this.server = server;
    this.serverForm.setValue({
      id: this.server.id,
      hostname: this.server.hostname,
      database: this.server.database,
      type: this.server.type,
      portnumber: this.server.portnumber,
      rowVersion: this.server.rowVersion,
   });
  }

  private readForm(): Server  {
    let s: Server = this.serverForm.value;
    s.type = DatabaseType[s.type];
    return Object.assign(new Server(), s);
  }

  public onSave(){
    this.server = this.readForm();
    this.service.saveServer(this.server).subscribe(
      (data) => {
        if (this.server.id == 0)
          this.server.id = data.id; //Dit kan netter en robuuster. (refreshlist?)
        this.router.navigate(['servers', 'details', this.server.id]);
      }, (err) => {
        this.serverErrors = err;
      });
  }
  
  public onCancel(){
    window.history.back();
  }
}
