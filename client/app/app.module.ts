import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { AppComponent } from 'client/app/app.component';
import { LoginComponent } from "client/app/screens/login/login.component";
import { DashboardComponent } from "client/app/screens/dashboard/dashboard.component";
import { ServersComponent } from "client/app/screens/servers/servers.component";
import { QueriesComponent } from "client/app/screens/queries/queries.component";
import { SyncsComponent } from "client/app/screens/syncs/syncs.component";
import { SettingsComponent } from "client/app/screens/settings/settings.component";
import { CrudlistComponent } from "client/app/components/crudlist/crudlist.component";
import { ServerDetailsComponent } from "client/app/screens/servers/server-details/server-details.component";
import { DataService } from "client/app/data/data.service";
import { EditableServerDetailsComponent } from "client/app/screens/servers/editable-server-details/editable-server-details.component";
import { HttpClientModule } from "@angular/common/http";
import { DataResolver } from "client/app/data/DataResolver";
import { ConfirmationModalComponent } from "client/app/components/confirmation-modal/confirmation-modal.component";
import { ServersResolver } from "client/app/data/ServersResolver";
import { QueryDetailsComponent } from "client/app/screens/queries/query-details/query-details.component";
import { EditableQueryDetailsComponent } from "client/app/screens/queries/editable-query-details/editable-query-details.component";
import { ROUTING } from "./app.routing";
import { QueriesResolver } from "./data/QueriesResolver";
import { SyncsResolver } from "client/app/data/SyncsResolver";
import { SyncDetailsComponent } from "./screens/syncs/sync-details/sync-details.component";
import { EditableSyncDetailsComponent } from "client/app/screens/syncs/editable-sync-details/editable-sync-details.component";

@NgModule({
    declarations: [
        AppComponent,
        CrudlistComponent,
        ConfirmationModalComponent,
        LoginComponent,
        ServersComponent,
        ServerDetailsComponent,
        EditableServerDetailsComponent,
        QueriesComponent,
        QueryDetailsComponent,
        EditableQueryDetailsComponent,
        SyncsComponent,
        SyncDetailsComponent,
        EditableSyncDetailsComponent,
        DashboardComponent,
        SettingsComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        ClarityModule,
        ROUTING
        
    ],
    providers: [DataService, DataResolver, ServersResolver, QueriesResolver, SyncsResolver],
    bootstrap: [AppComponent]
})
export class AppModule {
}
