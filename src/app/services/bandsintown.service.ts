import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Concert } from '../models/concert';

const API_KEY: string = "2b32475766802ac01eefda45e9e42ea0"

@Injectable({
  providedIn: 'root'
})

export class BandsintownService {

  constructor(public http: HttpClient) { }

  async getConcert(artiste: string): Promise<Concert[]> {

    let concert = await lastValueFrom(this.http.get<Concert[]>(`https://rest.bandsintown.com/artists/${artiste}/events?app_id=${API_KEY}`));

    return concert;
  }

}
