import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { throwIfAlreadyLoaded } from 'src/app/core/guards/module-import.guard';
import { ServerService } from 'src/app/core/services/server.service';
import { AlertService } from 'src/app/core/services/alert.service';
import { ConfigurationService } from 'src/app/core/services/configuration.service';
import { DatabaseService } from './services/database.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ServerService,
    DatabaseService,
    AlertService,
    ConfigurationService
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
