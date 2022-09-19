import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'pkm-poke-filter',
  templateUrl: './poke-filter.component.html',
  styleUrls: ['./poke-filter.component.scss'],
})
export class PokeFilterComponent implements OnInit {
  @Output() search: EventEmitter<string> = new EventEmitter();
  pokeSearch!: string;

  constructor() {}

  ngOnInit(): void {}

  searhPokemon() {
    this.search.emit(this.pokeSearch)
  }
}
