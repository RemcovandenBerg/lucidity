/* tslint:disable:no-unused-variable */

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ClarityModule } from "@clr/angular";
import { ROUTING } from "./app.routing";
import { APP_BASE_HREF } from "@angular/common";
import { LoginComponent } from './screens/login/login.component';
import { DashboardComponent } from './screens/dashboard/dashboard.component';
import { ServersComponent } from './screens/servers/servers.component';
import { QueriesComponent } from './screens/queries/queries.component';
import { SyncsComponent } from './screens/syncs/syncs.component';
import { ServerDetailsComponent } from './screens/servers/server-details/server-details.component';
import { FormsModule } from '@angular/forms';
import { CrudlistComponent } from './components/crudlist/crudlist.component';
import { EditableServerDetailsComponent } from './screens/servers/editable-server-details/editable-server-details.component';

describe('AppComponent', () => {

    let fixture: ComponentFixture<any>;
    let compiled: any;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                DashboardComponent,
                LoginComponent,
                ServersComponent,
                QueriesComponent,
                SyncsComponent,
                ServerDetailsComponent,
                CrudlistComponent,
                EditableServerDetailsComponent,
            ],
            imports: [
                FormsModule,
                ClarityModule.forRoot(),
                ROUTING
            ],
            providers: [{provide: APP_BASE_HREF, useValue: '/'}]
        });

        fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        compiled = fixture.nativeElement;


    });

    afterEach(() => {
        fixture.destroy();

    });

    it('should create the app', async(() => {
        expect(compiled).toBeTruthy();
    }));


});
