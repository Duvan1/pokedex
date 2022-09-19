import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/lib/models/pokemon.model';
import { PokeServiceService } from 'src/lib/services/pokemon/poke-service.service';

@Component({
  selector: 'pkm-poke-summary',
  templateUrl: './poke-summary.component.html',
  styleUrls: ['./poke-summary.component.scss'],
})
export class PokeSummaryComponent implements OnInit {
  pokemon!: Pokemon;

  constructor(
    private route: ActivatedRoute,
    private pokeService: PokeServiceService
  ) {}

  ngOnInit(): void {
    this.getPokemonFromRoute();
  }

  getPokemonFromRoute() {
    return this.route.paramMap.subscribe((map) => {
      let pokeId = map.get('pokeId');
      this.pokeService.getPokemon(pokeId).subscribe((poke) => {
        this.pokemon = poke;
        console.log(poke);
      });
    });
  }

  addFav(id: number): void {
    let listFav: number[] = JSON.parse(localStorage.getItem('poke_fav') || '[]');
    let existsFav = listFav.find((lf) => lf === id);
    if (!existsFav) listFav.push(id);
    else listFav = listFav.filter((lf) => lf !== id);
    localStorage.setItem('poke_fav', JSON.stringify(listFav));
    this.pokeService.favPokemons.next(listFav.length);
  }
}
