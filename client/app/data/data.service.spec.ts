import { DataService } from "./data.service";
import { TestBed, inject } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { Server } from "../models/Server";

describe("DataService", () => {
  
  let service: DataService<Server>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService]
    });
    service = TestBed.get(DataService);
  });

  it("should be able to create service instance",  inject(
    [HttpTestingController],  
     (httpMock: HttpTestingController) => {
      expect(service).toBeDefined();
  }));

  it('should call server api', inject(
    [HttpTestingController, DataService],  
     (httpMock: HttpTestingController) => {
      
      service.getAllServers().subscribe();
      httpMock.expectOne('/api/servers');
  }));

  it('should call server api', inject(
    [HttpTestingController, DataService],  
     (httpMock: HttpTestingController) => {
     service.getServer('hello').subscribe();

     httpMock.expectOne('/api/servers/hello');
  }));

  });
