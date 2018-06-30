import { NO_ERRORS_SCHEMA } from "@angular/core";
import { SyncDetailsComponent } from "./sync-details.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("SyncDetailsComponent", () => {

  let fixture: ComponentFixture<SyncDetailsComponent>;
  let component: SyncDetailsComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [SyncDetailsComponent]
    });

    fixture = TestBed.createComponent(SyncDetailsComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
