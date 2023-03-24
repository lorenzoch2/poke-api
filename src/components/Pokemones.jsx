import React, { useState, useEffect } from "react";
import { useContext } from "react";
import Context from "../Context";
import { useNavigate, useParams } from "react-router-dom";
import "../assets/css/pokemones.css"

function Pokemones() {
  const [selectedPokemon, setSelectedPokemon] = useState('');
  const [stats, setStats] = useState([])
  const { list } = useContext(Context);
  const navigate = useNavigate();
  const { id } = useParams();

  function handlePokemonSelect(e) {
    e.preventDefault();
    navigate(`/pokemones/${selectedPokemon}`);
  }

  useEffect(() => {
    async function stats() {
      if(id){
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();
      setStats(data.stats);
    }}
    stats();
  }, [id]);

  const imprimirEstadisticas = () => {
    const arreglo = stats.map((statPokemon, index) => (
      <p className="container" key={index}>
        {statPokemon.stat.name}
        {":"} {statPokemon.base_stat}
      </p>
    ));

    return arreglo;
  };

  const imprimirFoto = (id) =>{
    const pokemon = list.filter(photo => photo.name === id)
    const imprimirPokemon = pokemon.map((poke, index) => {
      return (
        <div key={index}>
          <h2>{poke.name}</h2>
          <img className="pokemon" src={poke.img} alt={poke.name} />
        </div>
      )
    })
    return imprimirPokemon
  }

  /*console.log("pokemon seleccionado:",selectedPokemon);
  console.log("estadisticas:",stats);
  console.log("id:",id)
  console.log("list:",list);*/

  return (
    <div className="list">
      <h2>Selecciona un Pokemon:</h2>
      <select
        value={selectedPokemon}
        onChange={(event) => setSelectedPokemon(event.target.value)}
      >
        <option value="" defaultValue disabled>
          -- Selecciona un Pokemon --
        </option>
        {list.map((pokemon, index) => (
          <option key={index} value={pokemon.name}>
            {pokemon.name}
          </option>
        ))}
      </select>
      <div className="button">
        <button onClick={handlePokemonSelect}>
          <h3>Ver detalles</h3>
        </button>
      </div>
      {id && (
        <div className="details">
          {imprimirFoto(id)}
          <ul className="stats">
            {imprimirEstadisticas()}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Pokemones;
