import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  NbButtonModule,
  NbContextMenuModule,
  NbLayoutModule,
  NbMenuModule,
  NbThemeModule,
} from '@nebular/theme';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbThemeModule.forRoot(),
    NbLayoutModule,
    NbMenuModule.forRoot(),
    NbButtonModule,
    NbContextMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
