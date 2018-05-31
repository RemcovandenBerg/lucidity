import { NO_ERRORS_SCHEMA } from "@angular/core";
import { SettingsComponent } from "./settings.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("SettingsComponent", () => {

  let fixture: ComponentFixture<SettingsComponent>;
  let component: SettingsComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [SettingsComponent]
    });

    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
});
