import { Component, OnInit } from '@angular/core';
import { PokeServiceService } from 'src/lib/services/pokemon/poke-service.service';

@Component({
  selector: 'pkm-poke-fav',
  templateUrl: './poke-fav.component.html',
  styleUrls: ['./poke-fav.component.scss'],
})
export class PokeFavComponent implements OnInit {
  pokemons: any[] = [];
  constructor(private pokeService: PokeServiceService) {}

  ngOnInit(): void {
    this.getFavPokemons();
  }

  getFavPokemons() {
    let listFav: any[] = JSON.parse(localStorage.getItem('poke_fav') || '[]');
    this.pokemons = [];
    listFav.forEach((lp: any) => {
      this.pokeService.getPokemon(lp).subscribe((pokemon) => {
        this.pokemons.push(pokemon);
      });
    });
  }
}
