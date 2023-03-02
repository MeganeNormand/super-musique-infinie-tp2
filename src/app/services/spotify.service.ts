import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { SpotifyToken } from '../models/spotify-token';
import { Artiste } from '../models/artiste';
import { Album } from '../models/album';

const CLIENT_ID: string = "7e0b6f05ec12427e81c65b01cd474bbf"
const CLIENT_SECRET: string = "7caf59e3892a46289b09ce6a884caa76"


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  spotifyToken: SpotifyToken | null = null;

  constructor(public http: HttpClient) { }

  async connect(): Promise<void> {
    let body = new HttpParams().set('grant_type', 'client_credentials');
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(CLIENT_ID + ':' + CLIENT_SECRET)
      })
    };
    let x = await lastValueFrom(this.http.post<SpotifyToken>('https://accounts.spotify.com/api/token', body.toString(), httpOptions));
    this.spotifyToken = x;
  }

  async getArtistId(artist: string): Promise<string> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.spotifyToken?.access_token
      })
    };

    let artisteRecherche = await lastValueFrom(this.http.get<any>('https://api.spotify.com/v1/search?type=artist&offset=0&limit=1&q=' + artist, httpOptions));
    return artisteRecherche.artists.items[0].id;
  }

  async addArtisteFavoris(artist: string): Promise<Artiste> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.spotifyToken?.access_token
      })
    };

    let artisteRecherche = await lastValueFrom(this.http.get<Artiste>('https://api.spotify.com/v1/artists/' + await this.getArtistId(artist), httpOptions));
    console.log(artisteRecherche)
    return artisteRecherche;
  }


  async getAlbum(artist: string): Promise<Album[]> {
    if(this.spotifyToken == null){
      await this.connect();
    }

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.spotifyToken?.access_token
      })
    };

    let albums = await lastValueFrom(this.http.get<{items:Album[]}>('https://api.spotify.com/v1/artists/'+ await this.getArtistId(artist) + '/albums', httpOptions));
    return albums.items;

  }
}
