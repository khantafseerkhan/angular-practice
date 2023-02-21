import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Child } from 'src/components/child/child.component';
import { Main } from 'src/components/main/main.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    Main,
    Child
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
