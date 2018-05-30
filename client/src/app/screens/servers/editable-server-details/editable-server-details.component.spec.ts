import { NO_ERRORS_SCHEMA } from "@angular/core";
import { EditableServerDetailsComponent } from "./editable-server-details.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("EditableServerDetailsComponent", () => {

  let fixture: ComponentFixture<EditableServerDetailsComponent>;
  let component: EditableServerDetailsComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [EditableServerDetailsComponent]
    });

    fixture = TestBed.createComponent(EditableServerDetailsComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
