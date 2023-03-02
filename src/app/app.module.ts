import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArtisteComponent } from './artiste/artiste.component';
import { ConcertComponent } from './concert/concert.component';
import { AlbumComponent } from './album/album.component';
import { ChansonComponent } from './chanson/chanson.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DatecustomPipe } from './pipes/datecustom.pipe';
import { GoogleMap } from '@angular/google-maps';
import { GoogleMapsModule } from '@angular/google-maps';
import { YouTubePlayerModule } from '@angular/youtube-player';

@NgModule({
  declarations: [
    AppComponent,
    ArtisteComponent,
    ConcertComponent,
    AlbumComponent,
    ChansonComponent,
    DatecustomPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: "", redirectTo: "/artiste", pathMatch: "full"},
      {path: "artiste", component: ArtisteComponent},
      {path: "concert/:artisteName", component: ConcertComponent},
      {path: "album/:artisteName", component: AlbumComponent},
      {path: "chanson/:albumId/:artisteName", component: ChansonComponent}
    ]),
    HttpClientModule,
    FormsModule,
    GoogleMapsModule,
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
