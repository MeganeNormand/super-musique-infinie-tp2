import { Component } from '@angular/core';
import { SpotifyService } from './services/spotify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'super-musique-infinie-tp2';

  constructor(public spotify : SpotifyService){}
  async ngOnInit(){
    this.spotify.connect();
  }
  
}
