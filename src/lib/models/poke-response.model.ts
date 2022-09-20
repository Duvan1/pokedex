export interface PokeResponse {
  count: number;
  next: string;
  previous: string | null;
  results: PokeResponseResult[];
}

export interface PokeResponseResult {
  name: string;
  url: string;
}
