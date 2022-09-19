import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { PokeServiceService } from 'src/lib/services/pokemon/poke-service.service';

@Component({
  selector: 'pkm-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss'],
})
export class WrapperComponent implements OnInit {
  logo: string = '/assets/logo.svg';
  unsubscribe = new Subject();
  countFavPokemons: number = 0;

  constructor(private route: Router, private pokeService: PokeServiceService) {}

  ngOnInit(): void {
    this.pokeService
      .howMuchPokeFav()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((count) => (this.countFavPokemons = count));
  }

  goToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  goToFav() {
    this.route.navigateByUrl('pokedex/fav');
  }
}
