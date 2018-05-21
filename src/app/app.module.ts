import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from '@clr/angular';
import { AppComponent } from './app.component';
import { ROUTING } from "./app.routing";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ServersComponent } from "./servers/servers.component";
import { QueriesComponent } from "./queries/queries.component";
import { SyncsComponent } from "./syncs/syncs.component";
import { SettingsComponent } from "./settings/settings.component";
import { CrudlistComponent } from "./components/crudlist/crudlist.component";
import { ServerDetailsComponent } from "./servers/server-details/server-details.component";

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        ServersComponent,
        ServerDetailsComponent,
        QueriesComponent,
        SyncsComponent,
        DashboardComponent,
        SettingsComponent,
        CrudlistComponent ,
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
