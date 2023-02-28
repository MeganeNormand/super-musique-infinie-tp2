import { Component, OnInit } from '@angular/core';
import { Artiste } from '../models/artiste';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-artiste',
  templateUrl: './artiste.component.html',
  styleUrls: ['./artiste.component.css']
})
export class ArtisteComponent {

  artistName: string = "";
  artist?: Artiste;
  artisteList: Artiste[] = [];
  artisteId: string = "";

  constructor(private spotify: SpotifyService) { }

  async addArtisteFavoris(): Promise<void> {
    if (this.artistName != "") {
      
      this.artist = await this.spotify.addArtisteFavoris(this.artistName);

      this.artisteList.push(this.artist);
      console.log(this.artist)
    }


  }

}
