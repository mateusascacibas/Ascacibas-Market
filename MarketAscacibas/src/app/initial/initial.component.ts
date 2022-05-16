import { GamesService } from './../services/games.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Games } from '../models/games';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.css']
})
export class InitialComponent implements OnInit {
  private url = "http://localhost:3000/games";
  games: Games[] = [];
  constructor(private serviceGames: GamesService) { }

  getGames(){
    this.serviceGames.getGames().subscribe((
      games: Games[]
    ) => {
      this.games = games;
    });
  }
  ngOnInit(): void {
   this.getGames();
  }

}
