import { Concert } from './../models/concert';
import { BandsintownService } from './../services/bandsintown.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Loader } from "@googlemaps/js-api-loader"

@Component({
  selector: 'app-concert',
  templateUrl: './concert.component.html',
  styleUrls: ['./concert.component.css']
})
export class ConcertComponent implements OnInit {
  artisteName: string | null = null;

  constructor(private bandintown: BandsintownService, public route: ActivatedRoute) {
    this.artisteName = this.route.snapshot.paramMap.get("artisteName");
  }


  concertList: Concert[] = [];
  myLatLng = { lat: 46.829853, lng: -71.254028 };


  ngOnInit(): void {
    this.initMAp();
    this.afficherConcert();

  }

  async afficherConcert() {
    if (this.artisteName != null) {
      this.concertList = await this.bandintown.getConcert(this.artisteName);
    }
    console.log(this.concertList);
  }

  initMAp() {
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

      var marker = new google.maps.Marker({
        position: this.myLatLng,
        title: "Hello World!"
      });

      marker.setMap(map);
    });
  }

  
}
