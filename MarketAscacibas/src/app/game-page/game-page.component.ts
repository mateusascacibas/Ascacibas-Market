import { GamesService } from './../services/games.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Games } from '../models/games';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router, public gamesService: GamesService) { }
  public id!: number;
  game!: Games;
  
  getGame(id: number){
     return this.gamesService.getGameId(id).subscribe((
      game: Games
      ) => {
        this.game = game;
      });
  }

  ngOnInit(): void {
    this.gamesService.idGame = +this.route.snapshot.params['id'];
    this.getGame(this.gamesService.idGame);
  }

}
