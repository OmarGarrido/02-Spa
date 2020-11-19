import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.services'

@Component({
  selector: 'app-buscar-heroe',
  templateUrl: './buscar-heroe.component.html',
  styles: [
  ]
})
export class BuscarHeroeComponent implements OnInit {


  heroes:any={};

  constructor(
    private _ActivatedRoute:ActivatedRoute,
    private _heroServices:HeroesService,
    private _router:Router,
  ) { 
    this._ActivatedRoute.params.subscribe(params=>{
      this.heroes=this._heroServices.BuscarHeroe(params['termino']);
      console.log(this.heroes);
      _heroServices.setAux(this.heroes);
    })
  }

  verHeroe(idx:number){
    this._router.navigate(['heroesAux',idx])//ruta y variable 
    }

  ngOnInit(): void {
  }

}
