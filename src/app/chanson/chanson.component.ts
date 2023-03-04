import { YoutubeService } from './../services/youtube.service';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';
import { Chanson } from '../models/chanson';
import { ActivatedRoute} from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

const youtubeURL = "https://www.youtube.com/embed/";
@Component({
  selector: 'app-chanson',
  templateUrl: './chanson.component.html',
  styleUrls: ['./chanson.component.css']
})

export class ChansonComponent{
  language: string = 'fr';
  chansonList: Chanson[] = [];
  albumId: string | null = null;
  artisteName: string | null = null;
  videoId : string = "";
  videoUrl ?: SafeResourceUrl;

  videoSearchText : string = "";

  constructor(private spotify: SpotifyService, private route: ActivatedRoute, public youtube: YoutubeService, public sanitizer : DomSanitizer, public translator: TranslateService) {
    translator.setDefaultLang(this.language);
    this.albumId = this.route.snapshot.paramMap.get("albumId");
    this.artisteName = this.route.snapshot.paramMap.get("artisteName");
  }

  ngOnInit(): void {
    this.afficherChanson();
  }

  async afficherChanson(){
    if(this.albumId != null){
      this.chansonList = await this.spotify.getChanson(this.albumId);
    }
  }

    async searchVideo(albumName: string):Promise<void>{
      if(this.artisteName != null && this.albumId != null){
        this.videoId = await this.youtube.getVideo(this.artisteName, albumName);
      }
   
    this.getSafeUrl(); 
  }

  getSafeUrl() : void{
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(youtubeURL + this.videoId)
  }
  
}
