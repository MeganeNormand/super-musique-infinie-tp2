import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Artiste } from '../models/artiste';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-artiste',
  templateUrl: './artiste.component.html',
  styleUrls: ['./artiste.component.css']
})
export class ArtisteComponent {

  language: string = 'fr';
  artistName: string = "";
  artist?: Artiste;
  artisteList: Artiste[] = [];
  artisteId: string = "";
  jsonDataProfile: string | null = null;

  constructor(private spotify: SpotifyService, public translator: TranslateService) {
    translator.setDefaultLang(this.language);
  }

  ngOnInit() {
    this.jsonDataProfile = localStorage.getItem("listeArtiste");
    if (this.jsonDataProfile != null) {
      this.artisteList = JSON.parse(this.jsonDataProfile);
    }
  }

  async addArtisteFavoris(): Promise<void> {
    if (this.artistName != "") {

      this.artist = await this.spotify.addArtisteFavoris(this.artistName);
      if (!this.artisteList.map(artist => artist.id).includes(this.artist.id)) {
        this.artisteList.push(this.artist);
      }
    }
    this.sauvegarderListeArtiste();

  }

  async sauvegarderListeArtiste() {
    localStorage.setItem("listeArtiste", JSON.stringify(this.artisteList))
  }

  async viderFavoris() {
    localStorage.clear();
    this.artisteList = [];
  }


}
