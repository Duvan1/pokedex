import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/lib/models/pokemon.model';
import {Location} from '@angular/common';
import { PokeServiceService } from 'src/lib/services/pokemon/poke-service.service';

@Component({
  selector: 'pkm-poke-fav',
  templateUrl: './poke-fav.component.html',
  styleUrls: ['./poke-fav.component.scss'],
})
export class PokeFavComponent implements OnInit {
  pokemons: Pokemon[] = [];
  constructor(
    private pokeService: PokeServiceService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getFavPokemons();
  }

  getFavPokemons() {
    let listFav: number[] = JSON.parse(
      localStorage.getItem('poke_fav') || '[]'
    );
    this.pokemons = [];
    listFav.forEach((lp) => {
      this.pokeService.getPokemon(lp).subscribe((pokemon) => {
        this.pokemons.push(pokemon);
      });
    });
  }

  goBack(): void {
    this.location.back();
  }
}
