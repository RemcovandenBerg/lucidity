import { DataService } from "./data.service";
import { TestBed } from "@angular/core/testing";

describe("DataService", () => {

  let service: DataService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DataService
      ]
    });
    service = TestBed.get(DataService);

  });

  it("should be able to create service instance", () => {
    expect(service).toBeDefined();
  });

});
