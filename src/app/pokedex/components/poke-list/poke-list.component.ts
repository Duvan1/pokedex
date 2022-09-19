import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { PokeResponseResult } from 'src/lib/models/poke-response.model';
import { Pokemon } from 'src/lib/models/pokemon.model';
import { PokeServiceService } from 'src/lib/services/pokemon/poke-service.service';

@Component({
  selector: 'pkm-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss'],
})
export class PokeListComponent implements OnInit {
  @Input() pokeKeyWord!: string;
  public pokemons: Pokemon[] = [];
  public pokemonsAuxList: Pokemon[] = [];

  constructor(private pokeService: PokeServiceService) {}

  ngOnInit(): void {
    this.getPokemons();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['pokeKeyWord']) {
      this.filterPokemons();
    }
  }

  filterPokemons() {
    let allPokemons = this.pokemonsAuxList;
    if (this.pokeKeyWord !== '' && this.pokeKeyWord !== undefined) {
      this.pokemons = [];
      this.pokemons = allPokemons.filter((poke) =>
        poke.name.includes(this.pokeKeyWord)
      );

      this.pokemons = this.pokemons.reduce((acc: Pokemon[], item: Pokemon) => {
        if (!acc.find((p) => p.id === item.id)) {
          acc.push(item);
        }
        return acc;
      }, []);
    } else {
      this.pokemons = this.pokemonsAuxList;
    }
  }

  getPokemons(offset?: number) {
    this.pokeService.get(offset).subscribe((res) => {
      res.results.forEach((poke: PokeResponseResult) => {
        this.pokeService.getPokemon(poke.name).subscribe((pokemon) => {
          this.pokemonsAuxList.push(pokemon);
        });
      });
    });
  }
}
