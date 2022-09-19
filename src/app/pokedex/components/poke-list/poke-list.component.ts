import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { NotifyHelper } from 'src/lib/helper/notify.helper';
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

  throttle = 0;
  distance = 2;

  constructor(
    private pokeService: PokeServiceService,
    private notifyService: NotifyHelper
  ) {}

  ngOnInit(): void {
    this.getPokemons();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['pokeKeyWord']) {
      this.filterPokemons();
    }
  }

  onScroll(): void {
    this.getPokemons(this.pokemons.length);
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
    this.pokeService.get(offset).subscribe(
      (res) => {
        res.results.forEach((poke: PokeResponseResult) => {
          this.pokeService.getPokemon(poke.name).subscribe(
            (pokemon) => {
              this.pokemonsAuxList.push(pokemon);
            },
            (err : any) => {
              this.notifyService.error('Error salvaje ha aparecido.');
            }
          );
        });
      },
      (err) => {
        this.notifyService.error('Error salvaje ha aparecido.');
      }
    );
  }
}
