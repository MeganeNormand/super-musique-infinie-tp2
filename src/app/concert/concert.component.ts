import { Concert } from './../models/concert';
import { BandsintownService } from './../services/bandsintown.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concert',
  templateUrl: './concert.component.html',
  styleUrls: ['./concert.component.css']
})
export class ConcertComponent implements OnInit {

  constructor(private bandintown: BandsintownService) { }

  artisteName: string = "";
  concertList: Concert[] = [];


  ngOnInit(): void {
    this.afficherConcert();
  }
  
  async afficherConcert(){
    this.artisteName = "Bad Bunny"
    this.concertList = await this.bandintown.getConcert(this.artisteName);
   console.log(this.concertList);
  }



}
