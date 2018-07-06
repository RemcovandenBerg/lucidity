import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from "@angular/core";
import { Server } from "client/app/models/Server";
import { DatabaseType, DatabaseTypeDescriptions } from "client/app/models/DatabaseType";
import { DataService } from "../../../data/data.service";


@Component({
  selector: "app-editable-server-details",
  templateUrl: "./editable-server-details.component.html",
  styleUrls: ["./editable-server-details.component.scss"]
})

export class EditableServerDetailsComponent {

  public server: Server = null;
  public serverForm: FormGroup;

  // options list
  public databaseTypeDescriptions = DatabaseTypeDescriptions;

  public serverErrors: any;

  constructor(private service: DataService, private router: Router, activatedRoute: ActivatedRoute, fb: FormBuilder) {

    this.serverForm = this.initForm(fb);

    activatedRoute.data.subscribe( data => {
      this.server = data.server;
      this.setForm(this.server);
    } );
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

  private setForm(server: Server): void {
    this.serverForm.setValue({
      id: server.id,
      hostname: server.hostname,
      database: server.database,
      type: server.type,
      portnumber: server.portnumber,
      rowVersion: server.rowVersion,
    });
  }

  private readForm(): Server {
    let s: Server = this.serverForm.value;
    return Object.assign(new Server(), s);
  }

  public onSave() {
    this.server = this.readForm();
    this.service.saveServer(this.server).subscribe(
      () => {
      if (this.server.id === 0)
        this.router.navigate(['servers']);
      else
        this.router.navigate(['servers', 'details', this.server.id]);
      }, (err) => {
        this.serverErrors = err;
      });
  }

  public onCancel() {
    window.history.back();
  }
}
