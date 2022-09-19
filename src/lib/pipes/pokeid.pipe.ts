import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokeId',
})
export class PokeIdPipe implements PipeTransform {
  constructor() {}

  transform(value: any) {
    if (value < 0) {
      const withoutMinus = String(value).slice(1);
      return '-' + withoutMinus.padStart(4, '0');
    }

    return String(value).padStart(4, '0');
  }
}
