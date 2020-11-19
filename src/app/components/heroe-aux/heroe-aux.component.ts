import { Component,  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/servicios/heroes.services';

@Component({
  selector: 'app-heroe-aux',
  templateUrl: './heroe-aux.component.html',
  styles: [
  ]
})
export class HeroeAuxComponent{

  heroe:any={};

  constructor(private _activatedRouter:ActivatedRoute,
              private _heroesServices:HeroesService
  ) 
  {   

    this._activatedRouter.params.subscribe(parametros=>{
    this.heroe=this._heroesServices.getAux(parametros['id']);
      
    })

  }



}
