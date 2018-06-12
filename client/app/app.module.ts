import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { AppComponent } from './app.component';
import { ROUTING } from "./app.routing";
import { LoginComponent } from "./screens/login/login.component";
import { DashboardComponent } from "./screens/dashboard/dashboard.component";
import { ServersComponent } from "./screens/servers/servers.component";
import { QueriesComponent } from "./screens/queries/queries.component";
import { SyncsComponent } from "./screens/syncs/syncs.component";
import { SettingsComponent } from "./screens/settings/settings.component";
import { CrudlistComponent } from "./components/crudlist/crudlist.component";
import { ServerDetailsComponent } from "./screens/servers/server-details/server-details.component";
import { DataService } from "./data/data.service";
import { EditableServerDetailsComponent } from "./screens/servers/editable-server-details/editable-server-details.component";
import { HttpClientModule } from "@angular/common/http";
import { DataResolver } from "./data/DataResolver";

@NgModule({
    declarations: [
        AppComponent,
        CrudlistComponent,
        LoginComponent,
        ServersComponent,
        ServerDetailsComponent,
        EditableServerDetailsComponent,
        QueriesComponent,
        SyncsComponent,
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
    providers: [DataService, DataResolver],
    bootstrap: [AppComponent]
})
export class AppModule {
}
