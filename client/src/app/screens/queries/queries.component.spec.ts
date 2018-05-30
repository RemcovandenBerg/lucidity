import { NO_ERRORS_SCHEMA } from "@angular/core";
import { QueriesComponent } from "./queries.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("QueriesComponent", () => {

  let fixture: ComponentFixture<QueriesComponent>;
  let component: QueriesComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [QueriesComponent]
    });

    fixture = TestBed.createComponent(QueriesComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
