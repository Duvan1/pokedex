import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

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
  get(offset?: number): Observable<any[]> {
    return this.http.get<any>(`${this.baseUrl}/pokemon/`, {
      params: {
        offset: offset ? offset : 0,
        limit: 9,
      },
    });
  }

  getPokemon(name?: string | null): Observable<any[]> {
    return this.http.get<any>(`${this.baseUrl}/pokemon/${name}`);
  }
}
