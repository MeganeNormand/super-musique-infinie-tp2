import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SpotifyService } from './services/spotify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'super-musique-infinie-tp2';
  lang = 'fr';
  constructor(public spotify : SpotifyService, public translator : TranslateService){
    translator.setDefaultLang(this.lang);
  }


  ngOnInit(){
    this.spotify.connect();
  }
  
  changeLanguage(language : string): void{
    this.lang = language;
    this.translator.use(this.lang);
  }
}
