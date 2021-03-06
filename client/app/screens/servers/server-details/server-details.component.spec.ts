import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ServerDetailsComponent } from "./server-details.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { DataService } from "client/app/data/data.service";
import { Server } from "client/app/models/Server";
import { ActivatedRoute, convertToParamMap } from "@angular/router";
import { from } from "rxjs/observable/from";
import { FormsModule } from "@angular/forms";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";

class MyMockDataService {

  getServer(id: string): Observable<Server> {
    let s =  new Server();
    s.hostname = "remco";
    this.paramUsed = id;
    return of(s);
  }

  paramUsed: string;
}

describe("ServerDetailsComponent", () => {
  let mockds = new MyMockDataService();
  let fixture: ComponentFixture<ServerDetailsComponent>;
  let component: ServerDetailsComponent;

  beforeEach(() => {

    let server = {server: new Server() };
    server.server.hostname = 'testbedserveres.com';

    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ServerDetailsComponent],
      providers: [
        { provide: ActivatedRoute, useValue: {  data: of(server) } }]
    });

    // apart want in de array werkt dit niet?
   // TestBed.overrideProvider( DataService, { useValue: mockds} );

    fixture = TestBed.createComponent(ServerDetailsComponent);
    component = fixture.componentInstance;
  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });

  it("inited with server resolved server", () => {
    expect(component.server.hostname).toBe("testbedserveres.com");
  });

});
