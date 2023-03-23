import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Context from "./Context";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Pokemones from "./components/Pokemones"

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    async function fetchPokemonList() {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0');
        const data = await response.json();
        setPokemonList(data.results);
      } catch (error) {
        console.log(error);
      }
    } fetchPokemonList(); 
  }, []);

  useEffect(() => { 
    const photoAdded = pokemonList.map((item, index) => {
      return { ...item, 
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/' + (index+1) + '.png', };
    });

    const ordenLista = photoAdded.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    setList(ordenLista);
  }, [pokemonList]);

  console.log(list)

  const globalState = { list, setList };

  return (
    <div className="App">
      <Context.Provider value={globalState}>
        <BrowserRouter basename="/poke-api">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemones" element={<Pokemones />} />
            <Route path="/pokemones/:id" element={<Pokemones />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;