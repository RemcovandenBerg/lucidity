import { NO_ERRORS_SCHEMA } from "@angular/core";
import { EditableSyncDetailsComponent } from "./editable-sync-details.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("EditableSyncDetailsComponent", () => {

  let fixture: ComponentFixture<EditableSyncDetailsComponent>;
  let component: EditableSyncDetailsComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [EditableSyncDetailsComponent]
    });

    fixture = TestBed.createComponent(EditableSyncDetailsComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
