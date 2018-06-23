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
import { QueriesComponent } from './screens/queries/queries.component';
import { SyncsComponent } from './screens/syncs/syncs.component';
import { ServerDetailsComponent } from './screens/servers/server-details/server-details.component';
import { EditableServerDetailsComponent } from './screens/servers/editable-server-details/editable-server-details.component';
import { DataResolver } from './data/DataResolver';
import { ServersResolver } from './data/ServersResolver';
import { QueriesResolver } from 'client/app/data/QueriesResolver';
import { EditableQueryDetailsComponent } from 'client/app/screens/queries/editable-query-details/editable-query-details.component';
import { QueryDetailsComponent } from './screens/queries/query-details/query-details.component';


export const ROUTES: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'servers', component: ServersComponent,
    resolve: { servers: ServersResolver },
    runGuardsAndResolvers: "always",
    children: [
      { path: 'details/:id', component: ServerDetailsComponent, resolve: { server: DataResolver } },
      { path: 'details/:id/edit', component: EditableServerDetailsComponent, resolve: { server: DataResolver } }
    ]
  },

  { path: 'queries', component: QueriesComponent,
    resolve: { queries: QueriesResolver },
    runGuardsAndResolvers: "always",
    children: [
      { path: 'details/:id', component: QueryDetailsComponent, resolve: { query: DataResolver } },
      { path: 'details/:id/edit', component: EditableQueryDetailsComponent, resolve: { query: DataResolver } }
    ]
  },
  { path: 'syncs', component: SyncsComponent },
  { path: 'settings', component: LoginComponent }


]; // straks apart

//export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES, { onSameUrlNavigation: "reload" });
export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);