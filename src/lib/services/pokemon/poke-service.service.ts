import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PokeResponse } from 'src/lib/models/poke-response.model';
import { Pokemon } from 'src/lib/models/pokemon.model';

@Injectable({
  providedIn: 'root',
})
export class PokeServiceService {
  baseUrl: string = environment.baseUrl;

  public favPokemons = new Subject<number>();

  constructor(private http: HttpClient) {}

  howMuchPokeFav(): Observable<number> {
    return this.favPokemons.asObservable();
  }

  //Obtiene pokemones
  get(offset?: number): Observable<PokeResponse> {
    return this.http.get<any>(`${this.baseUrl}/pokemon/`, {
      params: {
        offset: offset ? offset : 0,
        limit: 18,
      },
    });
  }

  getPokemon(name?: string | number | null): Observable<Pokemon> {
    return this.http.get<any>(`${this.baseUrl}/pokemon/${name}`);
  }

  getPokemonFlavor(name?: string | number | null): Observable<Pokemon> {
    return this.http.get<any>(`${this.baseUrl}/pokemon-species/${name}`);
  }
}
