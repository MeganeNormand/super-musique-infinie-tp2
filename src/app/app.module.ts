import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArtisteComponent } from './artiste/artiste.component';
import { ConcertComponent } from './concert/concert.component';
import { AlbumComponent } from './album/album.component';
import { ChansonComponent } from './chanson/chanson.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ArtisteComponent,
    ConcertComponent,
    AlbumComponent,
    ChansonComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: "", redirectTo: "/artiste", pathMatch: "full"},
      {path: "artiste", component: ArtisteComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
