import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArtisteComponent } from './artiste/artiste.component';
import { ConcertComponent } from './concert/concert.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtisteComponent,
    ConcertComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
