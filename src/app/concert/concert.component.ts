import { Concert } from './../models/concert';
import { BandsintownService } from './../services/bandsintown.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Loader } from "@googlemaps/js-api-loader"
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-concert',
  templateUrl: './concert.component.html',
  styleUrls: ['./concert.component.css']
})
export class ConcertComponent implements OnInit {
  artisteName: string | null = null;
  language: string = 'fr';

  constructor(private bandintown: BandsintownService, public route: ActivatedRoute,public translator: TranslateService) {
    this.artisteName = this.route.snapshot.paramMap.get("artisteName");
    translator.setDefaultLang(this.language);
  }


  concertList: Concert[] = [];
  myLatLng = { lat: 46.829853, lng: -71.254028 };


  ngOnInit(): void {
    
    this.afficherConcert();
    console.log(this.concertList)
  }

  async afficherConcert() {
    if (this.artisteName != null) {
      this.concertList = await this.bandintown.getConcert(this.artisteName);
    }
    this.initMAp(this.concertList)
  }

  initMAp(listeConcert: Concert[]) {
    //MAP
    let map: google.maps.Map;


    const loader = new Loader({
      apiKey: "AIzaSyA5BQYMsqPdmvNN6PQWix5HsRX15wsYSsA",
      version: "weekly"
    });

    loader.load().then(() => {
      map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: { lat: 46.829853, lng: -71.254028 },
        zoom: 5,
        mapTypeId: google.maps.MapTypeId.TERRAIN
      });

      for(var concert of listeConcert){
        var marker = new google.maps.Marker({
          position: { lat: Number(concert.venue.latitude), lng: Number(concert.venue.longitude)},
          map
        });
      }
      
    });
    console.log(listeConcert)
  }
  
}
