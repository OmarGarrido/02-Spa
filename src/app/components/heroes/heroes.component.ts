import { Component, OnInit } from '@angular/core';
import {HeroesService, Heroe} from '../../servicios/heroes.services'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[]=[]

  constructor(private _heroesService:HeroesService) { 

    console.log("Constructor");
    
  }

  ngOnInit(): void {
    console.log("ngOninit");

    this.heroes=this._heroesService.getHeroes();
    console.log(this.heroes);
    
  }

  
}
