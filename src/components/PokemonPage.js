import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";
const API = 'http://localhost:3001/pokemon'

function PokemonPage() {

  const [pokemon, setPokemon] = useState([])
  const [search, setSearch] = useState('')


  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then(pokemon => setPokemon(pokemon))
  }, [])


  function handleAddNewPokemon(newPokemon) {
    // console.log(newPokemon)
    fetch(API, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newPokemon)
    })
    .then(r => r.json())
    .then(newPoke => setPokemon([...pokemon, newPoke]))
  }


  const displayPokemon = pokemon.filter(pokemon => pokemon.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm handleAddNewPokemon={handleAddNewPokemon} />
      <br />
      <Search search={search} setSearch={setSearch} />
      <br />
      <PokemonCollection pokemon={displayPokemon} />
    </Container>
  );
}

export default PokemonPage;
