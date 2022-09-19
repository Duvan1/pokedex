import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pkm-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss'],
})
export class PokedexComponent implements OnInit {
  pokeKeyWord!: string;

  constructor() {}

  ngOnInit(): void {}

  filterPokemon(keyWord: string) {
    this.pokeKeyWord = keyWord;
  }
}
