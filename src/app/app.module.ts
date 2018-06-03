import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {KeysPipe} from './app.keys.pipe';
import {TypeofPipe} from './app.typeof.pipe';
import {MatCardModule, MatCheckboxModule, MatExpansionModule, MatGridListModule, MatListModule, MatTreeModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent, KeysPipe, TypeofPipe
  ],
  imports: [
    BrowserModule, MatCheckboxModule, MatCardModule, MatTreeModule, MatGridListModule, FormsModule, MatListModule, MatGridListModule,
    MatExpansionModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
