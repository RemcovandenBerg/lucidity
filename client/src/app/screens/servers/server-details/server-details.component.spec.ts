import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ServerDetailsComponent } from "./server-details.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("ServerDetailsComponent", () => {

  let fixture: ComponentFixture<ServerDetailsComponent>;
  let component: ServerDetailsComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [ServerDetailsComponent]
    });

    fixture = TestBed.createComponent(ServerDetailsComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });

});
