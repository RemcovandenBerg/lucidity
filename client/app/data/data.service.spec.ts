import { DataService } from "./data.service";
import { TestBed, inject } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

describe("DataService", () => {
  
  let service: DataService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService]
    });
    service = TestBed.get(DataService);
  });

  it("should be able to create service instance",  inject(
    [HttpTestingController, DataService],  
     (httpMock: HttpTestingController, dataService: DataService ) => {
    expect(service).toBeDefined();
  }));

});
