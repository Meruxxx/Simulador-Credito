import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  NbButtonModule,
  NbContextMenuModule,
  NbLayoutModule,
  NbMenuModule,
  NbThemeModule
} from '@nebular/theme';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CdatModule } from './pages/cdat/cdat.module';
import { ContractualesModule } from './pages/contractuales/contractuales.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NbThemeModule.forRoot(),
    NbLayoutModule,
    NbMenuModule.forRoot(),
    NbButtonModule,
    NbContextMenuModule,
    CdatModule,
    ContractualesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
