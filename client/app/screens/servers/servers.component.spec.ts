import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ServersComponent } from "./servers.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Server } from "client/app/models/Server";
import { Observable } from "rxjs/Observable";
import { from } from "rxjs/observable/from";
import { DataService } from "client/app/data/data.service";
import { of } from "rxjs/observable/of";


class MyMockDataService {

  getAllServers(): Observable<Server[]> {
    let s =  new Server();  
    s.hostname = "testmachine";
    return of([s]);
  }
}

describe("ServersComponent", () => {

  let fixture: ComponentFixture<ServersComponent>;
  let component: ServersComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ServersComponent]
    });

    TestBed.overrideProvider(DataService, { useValue: new MyMockDataService() });

    fixture = TestBed.createComponent(ServersComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });

});
