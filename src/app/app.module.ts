import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbButtonModule,
  NbContextMenuModule,
  NbGlobalLogicalPosition,
  NbLayoutModule,
  NbMenuModule,
  NbThemeModule,
  NbToastrModule
} from '@nebular/theme';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CdatModule } from './pages/cdat/cdat.module';
import { ContractualesModule } from './pages/contractuales/contractuales.module';
const maskConfig: Partial<IConfig> = {
  validation: false,
};
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NbThemeModule.forRoot(),
    NbLayoutModule,
    NbMenuModule.forRoot(),
    NbButtonModule,
    NbContextMenuModule,
    CdatModule,
    ContractualesModule,
    NbToastrModule.forRoot({
      duration: 3000,
      limit: 3,
      position: NbGlobalLogicalPosition.BOTTOM_END,
      destroyByClick:true
    }),
    NgxMaskModule.forRoot(maskConfig),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
