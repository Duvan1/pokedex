import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PokedexRoutingModule } from './pokedex-routing.module';
import { PokedexComponent } from './pokedex.component';
import { PokeListComponent } from './components/poke-list/poke-list.component';
import { PokeItemComponent } from './components/poke-item/poke-item.component';
import { PokeFavComponent } from './components/poke-fav/poke-fav.component';
import { BaseModule } from '../base/base.module';
import { PokeFilterComponent } from './components/poke-filter/poke-filter.component';
import { PokeSummaryComponent } from './components/poke-summary/poke-summary.component';
import { PokeNotFoundComponent } from './components/poke-not-found/poke-not-found.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    PokedexComponent,
    PokeListComponent,
    PokeItemComponent,
    PokeFavComponent,
    PokeFilterComponent,
    PokeSummaryComponent,
    PokeNotFoundComponent,
  ],
  imports: [
    BaseModule,
    CommonModule,
    PokedexRoutingModule,
    FormsModule,
    InfiniteScrollModule,
  ],
})
export class PokedexModule {}
