import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {
  NbButtonGroupModule,
  NbButtonModule,
  NbCardModule,
  NbInputModule,
  NbLayoutModule,
  NbSelectModule,
  NbThemeModule,
} from '@nebular/theme';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
const maskConfig: Partial<IConfig> = {
  validation: false,
};
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NbThemeModule.forRoot(),
    NbLayoutModule,
    NbButtonModule,
    NbInputModule,
    NbSelectModule,
    NgxMaskModule.forRoot(maskConfig),
    NbButtonGroupModule,
    NbCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
