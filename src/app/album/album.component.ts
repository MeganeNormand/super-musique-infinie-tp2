import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Album } from '../models/album';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})


export class AlbumComponent {

  language: string = 'fr';
  albumList: Album[] = [];
  artisteName: string | null = null;

  constructor(private spotify: SpotifyService, public route: ActivatedRoute, public translator: TranslateService) { 
    this.artisteName = this.route.snapshot.paramMap.get("artisteName");
    translator.setDefaultLang(this.language);
  }

  ngOnInit(){
    this.afficherAlbums();
  }

  async afficherAlbums(){
    if(this.artisteName != null){
      this.albumList = await this.spotify.getAlbum(this.artisteName)
    }
  }
}
