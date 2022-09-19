import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeFavComponent } from './components/poke-fav/poke-fav.component';
import { PokeSummaryComponent } from './components/poke-summary/poke-summary.component';
import { PokedexComponent } from './pokedex.component';

const routes: Routes = [
  {
    path: '',
    component: PokedexComponent,
  },
  {
    path: ':pokeId/summary',
    component: PokeSummaryComponent,
  },
  {
    path: 'fav',
    component: PokeFavComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokedexRoutingModule {}
