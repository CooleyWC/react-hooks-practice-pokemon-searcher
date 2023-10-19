import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({filteredPokes}) {
  // console.log(pokeData)

  const pokeListings = filteredPokes.map((poke)=>{
    return <PokemonCard 
    key={poke.id} 
    pokeName={poke.name} 
    pokeHp={poke.hp} 
    pokeImgFront={poke.sprites.front} 
    pokeImgBack={poke.sprites.back}/>
  })

  return (
    <Card.Group itemsPerRow={6}>

      {pokeListings}
    </Card.Group>
  );
}

export default PokemonCollection;
