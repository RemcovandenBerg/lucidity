import { Component, OnInit } from '@angular/core';
import { Query } from 'client/app/models/Query';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from 'client/app/data/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'lucid-editable-query-details',
  templateUrl: './editable-query-details.component.html',
  styleUrls: ['./editable-query-details.component.scss']
})
export class EditableQueryDetailsComponent {

  public query: Query = null;
  public queryForm: FormGroup;

  public queryErrors: any;

  constructor(private service: DataService, private router: Router, activatedRoute: ActivatedRoute, fb: FormBuilder) {
 
    this.queryForm = this.initForm(fb);

    activatedRoute.data.subscribe( data => {
      this.query = data.query;
      this.setForm(data.query);
    } );
  }

  private initForm(fb: FormBuilder): any {
    return fb.group({
      id: 0,
      name: ['', Validators.required],
      text: ['SELECT * FROM ', Validators.required],
      rowVersion: '',
    });
  }

  private setForm(qry: Query): void {
    this.queryForm.setValue({
      id: qry.id,
      name: qry.name,
      text: qry.text,
      rowVersion: qry.rowVersion,
    });
  }

  private readForm(): Query {
    let s: Query = this.queryForm.value;
    return Object.assign(new Query(), s);
  }

  public onSave() {
    this.query = this.readForm();
    this.service
      .saveQuery(this.query)
      .subscribe( () => {
        if (this.query.id == 0)
          this.router.navigate(['queries']);
        else
          this.router.navigate(['queries', 'details', this.query.id]);

      }, (err) => {
        this.queryErrors = err;
      });
  }

  public onCancel() {
    window.history.back();
  }
}