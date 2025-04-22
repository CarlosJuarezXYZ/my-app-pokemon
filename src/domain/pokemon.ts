export enum PokemonType {
    fire = "fire",
    water = "water",
    electric = "electric",
    dragon = "dragon",
    ghost = "ghost",
}

export interface PokemonInterface {
    name:string;
    image:string;
};

export interface PokemonDetailInterface {
    id: number;
    name: string;
    height: number;
    weight: number;
    types: string[];
    image: string;
    stasts?: { name: string; value: number }[];
};