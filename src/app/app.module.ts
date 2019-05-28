import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClickcomponentComponent } from './clickcomponent/clickcomponent.component';
import { KeyupComponent } from './keyup/keyup.component';
import { LoopbackComponent } from './loopback/loopback.component';
import { HovereventComponent } from './hoverevent/hoverevent.component';

@NgModule({
  declarations: [
    AppComponent,
    ClickcomponentComponent,
    KeyupComponent,
    LoopbackComponent,
    HovereventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
