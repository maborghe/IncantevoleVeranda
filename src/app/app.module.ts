import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {PageNotFoundComponent} from './app.helper';
import {HomeComponent} from './home/home.component';
import {AppRoutingModule} from './app-routing.module';
import {CasaComponent} from './casa/casa.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CasaComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
