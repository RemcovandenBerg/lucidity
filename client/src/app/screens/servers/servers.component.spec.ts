import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ServersComponent } from "./servers.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("ServersComponent", () => {

  let fixture: ComponentFixture<ServersComponent>;
  let component: ServersComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [ServersComponent]
    });

    fixture = TestBed.createComponent(ServersComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });

});
