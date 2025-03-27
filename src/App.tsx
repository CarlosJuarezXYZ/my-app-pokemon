import React, { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { RootState } from "./redux/store";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";
import GlobalStyle from "./GlobalStyle";
import ToastPokemon from "./components/ToastPokemon/ToastPokemon";
import Header from "./components/Header/Header";
import Loader from "./components/Loader/Loader";

const PokemonDetailMicroFront = lazy(() => import("pokemonDetailApp/PokemonDetail"));
const Init = lazy(() => import("./pages/Init/Init"));
const PokemonDetail = lazy(() => import("./pages/PokemonDetail/PokemonDetail"));
const HistoryPokemon = lazy(()=> import("./pages/HistoryPokemon/HistoryPokemon"));

const App: React.FC = () => {
  const themeMode = useSelector((state: RootState) => state.theme.mode);

  return (
    <>
      <GlobalStyle themeMode={themeMode} />
      <ThemeToggle />
      <Header/>
      <ToastPokemon />
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/" element={<Init />} />
          <Route path="/detail" element={<PokemonDetailMicroFront />} />
          <Route path="/detail/:name" element={<PokemonDetail />} />
          <Route path="/history" element={<HistoryPokemon />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
