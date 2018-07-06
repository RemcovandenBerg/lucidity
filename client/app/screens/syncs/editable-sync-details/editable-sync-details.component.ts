import { Component, OnInit } from "@angular/core";
import { DataService } from "../../../data/data.service";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Sync } from "client/app/models/Sync";

@Component({
  selector: "app-editable-sync-details",
  templateUrl: "./editable-sync-details.component.html",
  styleUrls: ["./editable-sync-details.component.scss"]
})

export class EditableSyncDetailsComponent implements OnInit {


  public sync: Sync = null;
  public syncForm: FormGroup;

  // options list


  public serverErrors: any;

  constructor(private service: DataService, private router: Router, activatedRoute: ActivatedRoute, fb: FormBuilder) {

    this.syncForm = this.initForm(fb);

    activatedRoute.data.subscribe( data => {
      this.sync = data.sync;
      this.setForm(this.sync);
    } );
  }

  private initForm(fb: FormBuilder): any {
    return fb.group({
      id: 0,
      query: [null, Validators.required],
      source_server: [null, Validators.required],
      target_server: [null, Validators.required],
      cronschedule: '',
      schedule_enabled: [false, Validators.required],
      rowVersion: '',
    });
  }

  private setForm(sync: Sync): void {
    this.syncForm.setValue({
        id: sync.id,
        query: sync.query,
        source_server: sync.sourceServer,
        target_server: sync.targetServer,
        cronschedule: sync.cronSchedule,
        schedule_enabled: sync.isScheduleEnabled,
        rowVersion : sync.rowVersion,
    });
  }

  private readForm(): Sync {
    let s: Sync = this.syncForm.value;
    return Object.assign(new Sync(), s);
  }

  public onSave() {
    this.sync = this.readForm();
    this.service.saveSync(this.sync).subscribe(
      () => {
      if (this.sync.id === 0)
        this.router.navigate(['syncs']);
      else
        this.router.navigate(['syncs', 'details', this.sync.id]);
      }, (err) => {
        this.serverErrors = err;
      });
  }

  public onCancel() {
    window.history.back();
  }
  ngOnInit() {

  }
}
