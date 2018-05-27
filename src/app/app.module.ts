import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { DisplayComponent } from './home/chatarea/display/display.component';
import { HomeComponent } from './home/home.component';
import { JumbotronComponent } from './home/header/jumbotron/jumbotron.component';
import { ChatareaComponent } from './home/chatarea/chatarea.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DisplayComponent,
    HomeComponent,
    JumbotronComponent,
    ChatareaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
