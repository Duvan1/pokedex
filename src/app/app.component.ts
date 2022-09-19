import { Component } from '@angular/core';
import { PokeServiceService } from 'src/lib/services/pokemon/poke-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'PokeDex';

  constructor(private pokeService: PokeServiceService) {
    if (localStorage.getItem('poke_fav') === null) {
      localStorage.setItem('poke_fav', JSON.stringify([]));
      this.pokeService.favPokemons.next(
        JSON.parse(localStorage.getItem('poke_fav') || '[]').length
      );
    }
  }
}
