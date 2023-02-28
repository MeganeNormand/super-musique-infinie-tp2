import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const CLIENT_ID : string = "7e0b6f05ec12427e81c65b01cd474bbf"
const CLIENT_SECRET: string = "49b8ad9d0aa74d159448c9563010323b"

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  spotifyToken : string | null = null;

  constructor(public http : HttpClient) { }

  async connect(): Promise<void> {
      let body = new HttpParams().set('grant_type', 'client_credentials');
      let httpOptions = {
        headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(CLIENT_ID + ':' + CLIENT_SECRET)
        })
      };
      let x = await lastValueFrom(this.http.post<any>('https://accounts.spotify.com/api/token', body.toString(), httpOptions));
      this.spotifyToken = x.access_token;
  }
}
