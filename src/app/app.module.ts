import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArtisteComponent } from './artiste/artiste.component';
import { ConcertComponent } from './concert/concert.component';
import { AlbumComponent } from './album/album.component';
import { ChansonComponent } from './chanson/chanson.component';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DatecustomPipe } from './pipes/datecustom.pipe';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { DatePipe, registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { TrustPipe } from './pipes/trust.pipe';

registerLocaleData(localeFr);

@NgModule({
  declarations: [		
    AppComponent,
    ArtisteComponent,
    ConcertComponent,
    AlbumComponent,
    ChansonComponent,
    DatecustomPipe,
    TrustPipe
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
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps : [HttpClient]
      }
    })
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


export function HttpLoaderFactory(http : HttpClient){
  return new TranslateHttpLoader(http);
}