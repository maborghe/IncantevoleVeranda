import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {HomeComponent, PageNotFoundComponent} from './app.helper';
import {CasaComponent} from './casa/casa.component';
import {AppRoutingModule} from './app-routing.module';

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
