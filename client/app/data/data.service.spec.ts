import { DataService } from "./data.service";
import { TestBed, inject } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { Server } from "client/app/models/Server";
import { Query } from "client/app/models/Query";
import { Sync } from "client/app/models/Sync";

describe("DataService", () => {
  
  let service: DataService;
  let httpMock: HttpTestingController

  beforeEach( () => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService],
    });

    service = TestBed.get(DataService);
    httpMock = TestBed.get(HttpTestingController);
  });
  
  it("should be able to create service instance", () => {
    expect(service).toBeDefined();
    expect(httpMock).toBeDefined();
  });

  describe('"Server" calls exists of', () => {
    let baseUri = '/api/servers/';

    it('all', () => {
      service.getAllServers().subscribe();
      httpMock.expectOne(baseUri);
    });

    it('single', () => {
        service.getServer('12').subscribe();
        httpMock.expectOne(baseUri + '12');
    });

    it('save', () => {
      service.saveServer(new Server()).subscribe();
      httpMock.expectOne(baseUri);
    });
  });

  describe('"Query" calls exists of', () => {
    let baseUri = '/api/queries/';

    it('all', () => {
      service.getAllQueries().subscribe();
      httpMock.expectOne(baseUri);
    });

    it('single', () => {
        service.getQuery('12').subscribe();
        httpMock.expectOne(baseUri + '12');
    });

    it('save', () => {
      service.saveQuery(new Query()).subscribe();
      httpMock.expectOne(baseUri);
    });
  });

  describe('"Syncs" calls exists of', () => {
    let baseUri = '/api/syncs/';

    it('all', () => {
      service.getAllSyncs().subscribe();
      httpMock.expectOne(baseUri);
    });

    it('single', () => {
        service.getSync('12').subscribe();
        httpMock.expectOne(baseUri + '12');
    });

    it('save', () => {
      service.saveSync(new Sync()).subscribe();
      httpMock.expectOne(baseUri);
    });
  });

});
