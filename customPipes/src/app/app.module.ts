import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CapitalizeComponent } from './capitalize/capitalize.component';
import {capitalizePipe} from "./capitalize.pipe";

@NgModule({
  declarations: [
    AppComponent,
    CapitalizeComponent,
    capitalizePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
