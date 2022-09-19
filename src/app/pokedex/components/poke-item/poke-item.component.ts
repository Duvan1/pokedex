import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NotifyHelper } from 'src/lib/helper/notify.helper';
import { Pokemon } from 'src/lib/models/pokemon.model';
import { PokeServiceService } from 'src/lib/services/pokemon/poke-service.service';

@Component({
  selector: 'pkm-poke-item',
  templateUrl: './poke-item.component.html',
  styleUrls: ['./poke-item.component.scss'],
})
export class PokeItemComponent implements OnInit {
  @Output() favsChanged: EventEmitter<void> = new EventEmitter();
  @Input() pokemon!: Pokemon;
  constructor(
    private pokeService: PokeServiceService,
    private route: Router,
    private norifyService: NotifyHelper
  ) {}

  ngOnInit(): void {
    this.pokeService.favPokemons.next(
      JSON.parse(localStorage.getItem('poke_fav') || '[]').length
    );
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
    this.norifyService.success('Agregado con éxito');
    this.favsChanged.emit();
  }

  isFavCheck(id: number): boolean {
    let listFav: number[] = JSON.parse(
      localStorage.getItem('poke_fav') || '[]'
    );
    return listFav.find((lf) => lf === id) ? true : false;
  }

  goToPokemon(id: number): void {
    this.route.navigateByUrl(`/pokedex/${id}/summary`);
  }
}
