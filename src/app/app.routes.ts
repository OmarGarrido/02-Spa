import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component'
import { AboutComponent } from './components/about/about.component'
import { HeroesComponent } from './components/heroes/heroes.component'
import { HeroeComponent } from './components/heroe/heroe.component'
import { HeroeAuxComponent } from './components/heroe-aux/heroe-aux.component'
import { BuscarHeroeComponent } from './components/buscar-heroe/buscar-heroe.component'

const APP_ROUTES: Routes=[
    {path:'buscar/:termino',component:BuscarHeroeComponent},
    {path:'heroesAux/:id',component:HeroeAuxComponent},

    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'heroes',component:HeroesComponent},
    {path:'heroe/:id',component:HeroeComponent},
    {path:'**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
//habilitar hash para parametros (update, insert,etc)
//export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});