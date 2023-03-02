import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';
import { Chanson } from '../models/chanson';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-chanson',
  templateUrl: './chanson.component.html',
  styleUrls: ['./chanson.component.css']
})
export class ChansonComponent{

  chansonList: Chanson[] = [];
  albumId: string | null = null;
  albumName: string | null = null;

  constructor(private spotify: SpotifyService, private route: ActivatedRoute) {
    this.albumId = this.route.snapshot.paramMap.get("albumId");
    this.albumName = this.route.snapshot.paramMap.get("albumName");
  }

  ngOnInit(): void {
    this.afficherChanson();
  }

  async afficherChanson(){
    if(this.albumId != null){
      this.chansonList = await this.spotify.getChanson(this.albumId);
    }
    
  }

}
