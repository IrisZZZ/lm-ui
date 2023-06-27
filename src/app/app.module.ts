import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import {LmComponentLibraryModule} from 'lm-component-library';
import { LmDemoPageComponent } from './lm-demo-page/lm-demo-page.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    LmDemoPageComponent,
  ],
  imports: [
    BrowserModule,
    LmComponentLibraryModule,
    CommonModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
