import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
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

@NgModule({
    declarations: [
        AppComponent,
        CrudlistComponent,
        LoginComponent,
        ServersComponent,
        ServerDetailsComponent,
        QueriesComponent,
        SyncsComponent,
        DashboardComponent,
        SettingsComponent       
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        ClarityModule,
        ROUTING
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
