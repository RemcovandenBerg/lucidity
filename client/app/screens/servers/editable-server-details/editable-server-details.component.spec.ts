import { NO_ERRORS_SCHEMA } from "@angular/core";
import { EditableServerDetailsComponent } from "./editable-server-details.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { DataService } from "../../../data/data.service";
import { of } from "rxjs/observable/of";
import { convertToParamMap, ActivatedRoute } from "@angular/router";

describe("EditableServerDetailsComponent", () => {

  let fixture: ComponentFixture<EditableServerDetailsComponent>;
  let component: EditableServerDetailsComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: DataService, useValue: {} },
        { provide: ActivatedRoute, useValue: { paramMap: of(convertToParamMap({ id: "0" })) } }       
      ],
      declarations: [EditableServerDetailsComponent]
    });

    //dupliceren
    // TestBed.overrideProvider(ActivatedRoute, {
    //   useValue: {
    //     paramMap: of(convertToParamMap({ id: "0" }))
    //   }
    // });

    fixture = TestBed.createComponent(EditableServerDetailsComponent);
    component = fixture.componentInstance;
  });

  it("Should be able to create component instance", () => {
    expect(component).toBeDefined();
  });

  it("zero id gives a new server (create state)", () => {
   
      expect(component.server).toBeDefined();
      expect(component.server.id).toBe(0);
      expect(component.server.hostname).toBeUndefined();
  });

});
