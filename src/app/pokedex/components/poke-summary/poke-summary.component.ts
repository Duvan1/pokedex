import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/lib/models/pokemon.model';
import { Location } from '@angular/common';
import { PokeServiceService } from 'src/lib/services/pokemon/poke-service.service';
import { NotifyHelper } from 'src/lib/helper/notify.helper';

@Component({
  selector: 'pkm-poke-summary',
  templateUrl: './poke-summary.component.html',
  styleUrls: ['./poke-summary.component.scss'],
})
export class PokeSummaryComponent implements OnInit {
  pokemon!: Pokemon;

  constructor(
    private route: ActivatedRoute,
    private pokeService: PokeServiceService,
    private location: Location,
    private notifyService: NotifyHelper
  ) {}

  ngOnInit(): void {
    this.getPokemonFromRoute();
  }

  getPokemonFromRoute() {
    return this.route.paramMap.subscribe((map) => {
      let pokeId = map.get('pokeId');
      this.pokeService.getPokemon(pokeId).subscribe(
        (poke) => {
          this.pokeService.getPokemonFlavor(pokeId).subscribe(
            (flavor: any) => {
              poke.flavor_text = flavor.flavor_text_entries![0].flavor_text;
              this.pokemon = poke;
            },
            (err) => {
              this.notifyService.error('Error salvaje ha aparecido.');
            }
          );
        },
        (err) => {
          this.notifyService.error('Error salvaje ha aparecido.');
        }
      );
    });
  }

  isFavCheck(id: number): boolean {
    let listFav: number[] = JSON.parse(
      localStorage.getItem('poke_fav') || '[]'
    );
    return listFav.find((lf) => lf === id) ? true : false;
  }

  addFav(id: number): void {
    let listFav: number[] = JSON.parse(
      localStorage.getItem('poke_fav') || '[]'
    );
    let existsFav = listFav.find((lf) => lf === id);
    if (!existsFav) listFav.push(id);
    else listFav = listFav.filter((lf) => lf !== id);
    localStorage.setItem('poke_fav', JSON.stringify(listFav));
    this.pokeService.favPokemons.next(listFav.length);
    this.notifyService.success('Agregado con éxito');
  }

  goBack(): void {
    this.location.back();
  }
}
