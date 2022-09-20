export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: Sprites;
  flavor_text?: string | null;
  types: Types[];
}

export interface Types {
  slot: number;
  type: Type;
}

export interface Type {
  name: string;
  url: string;
}

export interface Sprites {
  other: {
    home: {
      front_default: string;
    };
  };
}
