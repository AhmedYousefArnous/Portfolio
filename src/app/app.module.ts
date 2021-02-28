import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import {  HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { CoreComponent } from './components/core/core.component';
import { FooterComponent } from './components/footer/footer.component';

import {CoreModule} from './components/core/core.module';
import {AppReducer} from './components/core/NgRx/app-reducers';
import {environment} from '../environments/environment';
import {SettingComponent} from './components/header/setting/setting.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SettingComponent,
    CoreComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'universal-app'}),
    HttpClientModule,
    BrowserAnimationsModule,
    CoreModule,
    StoreModule.forRoot({AppState: AppReducer}),
    !environment.production ? StoreDevtoolsModule.instrument() : []


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
