import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getPokemonImage } from "../../utils/getPokemonImage";
import { PokemonDetailInterface, PokemonInterface } from "../../domain/pokemon";

interface PokemonState {
  allPokemons: PokemonInterface[];
  pokemon: PokemonInterface;
  pokemonDetail: PokemonDetailInterface | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  typePokemonList: { [key: string]: PokemonInterface[] };
  error: string | null;
  nextUrl: string | null;
  visitedPokemons:  PokemonDetailInterface[];
  lastViewed: PokemonDetailInterface | null;
}

const initialState: PokemonState = {
  allPokemons: [],
  pokemon: {} as PokemonInterface,
  status: "idle",
  pokemonDetail: null,
  typePokemonList: {},
  error: null,
  nextUrl: "https://pokeapi.co/api/v2/pokemon?limit=30",
  visitedPokemons: [],
  lastViewed: JSON.parse(localStorage.getItem("lastViewedPokemon") || "null"),
};

export const fetchPokemonByType = createAsyncThunk(
  "pokemon/fetchPokemonByType",
  async (type: string) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/type/${type}`);
    const pokemonsList = response.data.pokemon.slice(0, 10);

    return {
      type,
      pokemon: pokemonsList.map((pokemon: any) => {
        const id = pokemon.pokemon.url.split("/").filter(Boolean).pop();
        return {
          name: pokemon.pokemon.name,
          image: getPokemonImage(Number(id)),
        };
      }),
    };
  }
);

export const fetchAllPokemons = createAsyncThunk<
  { pokemons: any[]; nextUrl: string | null },
  void,
  { state: { pokemon: PokemonState } }
>("pokemon/fetchPokemons", async (_, { getState }) => {
  const { pokemon } = getState();
  if (!pokemon.nextUrl) return { pokemons: [], nextUrl: null };

  const response = await axios.get(pokemon.nextUrl);
  return {
    pokemons: response.data.results.map((pokemon: any) => {
      const id = pokemon.url.split("/").filter(Boolean).pop();
      return {
        name: pokemon.name,
        image: getPokemonImage(Number(id)),
      };
    }),
    nextUrl: response.data.next || null,
  };
});

export const fetchPokemonDetail = createAsyncThunk(
  "pokemon/fetchPokemonDetail",
  async (pokemonName: string) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    return {
      id: response.data.id,
      name: response.data.name,
      image: getPokemonImage(response.data.id),
      height: response.data.height,
      weight: response.data.weight,
      types: response.data.types.map((type: any) => type.type.name),
      stats: response.data.stats.map((stat: any) => ({
        name: stat.stat.name,
        value: stat.base_stat,
      })),
    };
  }
);

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    addToHistory: (state, action) => {
      const exists = state.visitedPokemons.some(pokemon => pokemon.id === action.payload.id);
      if (!exists) {
        state.visitedPokemons.push(action.payload);
      }

      state.lastViewed = action.payload;
      localStorage.setItem("lastViewedPokemon", JSON.stringify(action.payload));
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemonByType.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPokemonByType.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.typePokemonList[action.payload.type] = action.payload.pokemon;
      })
      .addCase(fetchPokemonByType.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch Pokémon";
      })
      .addCase(fetchAllPokemons.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllPokemons.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.allPokemons = [...state.allPokemons, ...action.payload.pokemons];
        state.nextUrl = action.payload.nextUrl;
      })
      .addCase(fetchAllPokemons.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch Pokémon";
      })
      .addCase(fetchPokemonDetail.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPokemonDetail.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.pokemonDetail = action.payload;

        const exists = state.visitedPokemons.some(pokemon => pokemon.id === action.payload.id);
        if (!exists) {
          state.visitedPokemons.push(action.payload);
        }

         state.lastViewed = action.payload;
         localStorage.setItem("lastViewedPokemon", JSON.stringify(action.payload));
      })
      .addCase(fetchPokemonDetail.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch Pokémon detail";
      });
  },
});

export const { addToHistory } = pokemonSlice.actions;

export const selectTypePokemonList = (state: any, type: string) =>
  state.pokemon.typePokemonList[type] || [];
export const selectAllPokemons = (state: any) => state.pokemon.allPokemons;
export const selectPokemonDetail = (state: any) => state.pokemon.pokemonDetail;
export const selectVisitedPokemons = (state: any) => state.pokemon.visitedPokemons;

export default pokemonSlice.reducer;
