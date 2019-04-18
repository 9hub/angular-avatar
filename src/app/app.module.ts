import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxAvatarModule } from '../../projects/ngx-avatar/src/public-api';
import { AppMaterialModule } from './app-material.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    NgxAvatarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
