import { NO_ERRORS_SCHEMA } from "@angular/core";
import { SyncsComponent } from "./syncs.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("SyncsComponent", () => {

  let fixture: ComponentFixture<SyncsComponent>;
  let component: SyncsComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [SyncsComponent]
    });

    fixture = TestBed.createComponent(SyncsComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
