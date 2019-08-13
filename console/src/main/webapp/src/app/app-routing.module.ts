import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServersComponent } from 'src/app/modules/servers/pages/servers/servers.component';
import { ServersListComponent } from 'src/app/modules/servers/pages/servers-list/servers-list.component';
import { ConfigurationComponent } from 'src/app/modules/configuration/pages/configuration/configuration.component';
import { ConnfigurationDbproxyComponent } from 'src/app/modules/configuration/pages/connfiguration-dbproxy/connfiguration-dbproxy.component';
import { DatabaseComponent } from './modules/database/pages/database/database.component';
import { DatabaseActionsComponent } from './modules/database/pages/database-actions/database-actions.component';

const routes: Routes = [
  {
    path: 'servers', component: ServersComponent, children: [
      {
        path: '',
        component: ServersListComponent,
      }
    ]
  },
  {
    path: 'database', component: DatabaseComponent, children: [
      {
        path: '',
        component: DatabaseActionsComponent,
      }
    ]
  },
  {
    path: 'config', component: ConfigurationComponent, children: [
      {
        path: 'dbproxy',
        component: ConnfigurationDbproxyComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
