import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { PokeServiceService } from 'src/lib/services/pokemon/poke-service.service';

@Component({
  selector: 'pkm-poke-item',
  templateUrl: './poke-item.component.html',
  styleUrls: ['./poke-item.component.scss'],
})
export class PokeItemComponent implements OnInit {
  @Output() favsChanged: EventEmitter<void> = new EventEmitter();
  @Input() pokemon!: any;
  constructor(private pokeService: PokeServiceService, private route: Router) {}

  ngOnInit(): void {
    this.pokeService.favPokemons.next(
      JSON.parse(localStorage.getItem('poke_fav') || '[]').length
    );
  }

  addFav(id: number) {
    let listFav: any[] = JSON.parse(localStorage.getItem('poke_fav') || '[]');
    let existsFav = listFav.find((lf) => lf === id);
    if (!existsFav) listFav.push(id);
    else listFav = listFav.filter((lf) => lf !== id);
    localStorage.setItem('poke_fav', JSON.stringify(listFav));
    this.pokeService.favPokemons.next(listFav.length);
    this.favsChanged.emit();
  }

  isFavCheck(id: number) {
    let listFav: any[] = JSON.parse(localStorage.getItem('poke_fav') || '[]');
    return listFav.find((lf) => lf === id);
  }

  goToPokemon(id: number): void{
    this.route.navigateByUrl(`/pokedex/${id}/summary`)
  }
}
