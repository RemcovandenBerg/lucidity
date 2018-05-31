import { NO_ERRORS_SCHEMA } from "@angular/core";
import { CrudlistComponent } from "./crudlist.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("CrudlistComponent", () => {

  let fixture: ComponentFixture<CrudlistComponent>;
  let component: CrudlistComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [CrudlistComponent]
    });

    fixture = TestBed.createComponent(CrudlistComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });

});
