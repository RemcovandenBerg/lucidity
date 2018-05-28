/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './screens/dashboard/dashboard.component';
import { LoginComponent } from './screens/login/login.component';
import { ServersComponent } from './screens/servers/servers.component';
import { QueriesComponent } from 'app/screens/queries/queries.component';
import { SyncsComponent } from './screens/syncs/syncs.component';
import { ServerDetailsComponent } from './screens/servers/server-details/server-details.component';


export const ROUTES: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    {
        path: 'servers', component: ServersComponent,
        children: [
            { path: 'details/:name', component: ServerDetailsComponent }
        ]
    },

    { path: 'queries', component: QueriesComponent },
    { path: 'syncs', component: SyncsComponent },
    { path: 'settings', component: LoginComponent }
]; // straks apart

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
