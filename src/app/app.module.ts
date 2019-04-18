import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxAvatarModule } from '../../projects/ngx-avatar/src/public-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxAvatarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
