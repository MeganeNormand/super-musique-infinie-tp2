import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

const googleApiKey = "AIzaSyA5BQYMsqPdmvNN6PQWix5HsRX15wsYSsA";

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  constructor(public http: HttpClient) { }
  async getVideo(artisteName : string, albumName: string) : Promise<string>{
    
    let x = await lastValueFrom(this.http.get<any>('https://www.googleapis.com/youtube/v3/search?type=video&part=id&maxResults=1' + '&key=' + googleApiKey + '&q=' + artisteName + " " + albumName));
    console.log(x);

    let id = x.items[0].id.videoId
    return id;
  }
 
}


