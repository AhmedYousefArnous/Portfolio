import {NgModule} from '@angular/core';
import {ServerModule, ServerTransferStateModule} from '@angular/platform-server';
import {ModuleMapLoaderModule} from '@nguniversal/module-map-ngfactory-loader';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {AppModule} from './app.module';
import {AppComponent} from './app.component';

@NgModule({
    imports: [
        AppModule,
        ServerModule,
        NoopAnimationsModule,
        ModuleMapLoaderModule,
        ServerTransferStateModule, // comment
    ],
    bootstrap: [AppComponent]
})
export class AppServerModule {}
