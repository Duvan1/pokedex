import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeServiceService } from 'src/lib/services/pokemon/poke-service.service';

@Component({
  selector: 'pkm-poke-summary',
  templateUrl: './poke-summary.component.html',
  styleUrls: ['./poke-summary.component.scss'],
})
export class PokeSummaryComponent implements OnInit {
  pokemon!: any;
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
}
