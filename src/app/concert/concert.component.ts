import { Concert } from './../models/concert';
import { BandsintownService } from './../services/bandsintown.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  

  ngOnInit(): void {
    
      
    this.afficherConcert();
  }
  
  async afficherConcert(){
    if(this.artisteName != null){
      this.concertList = await this.bandintown.getConcert(this.artisteName);
    }
    console.log(this.concertList);
  }



}
