import React, {useEffect, useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokeData, setPokeData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false)
  const [search, setSearch] = useState('')
  
  useEffect(()=>{
    fetch('http://localhost:3001/pokemon')
    .then(res=>res.json())
    .then(data=>{
      setPokeData(data)
      setIsLoaded(!isLoaded)
    })
  }, [])

  if(!isLoaded){return <h1>Loading...</h1>}

  function handleSearch(e){
    setSearch(e.target.value)
  }

  const filteredPokes = pokeData.filter((poke)=>{
    return poke.name.toLowerCase().includes(search.toLowerCase())
  })


  function handleSubmit(data){
    
    const newPoke = {
      name: data.name,
      hp: data.hp,
      sprites: {
        front: data.frontUrl,
        back: data.backUrl
      }
    }

    fetch('http://localhost:3001/pokemon',{
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(newPoke)
    })
    .then(res=>res.json())
    .then((resObj)=>setPokeData([...pokeData, resObj]))
  }


  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm handleSubmit={handleSubmit}/>
      <br />
      <Search handleSearch={handleSearch}/>
      <br />
      <PokemonCollection filteredPokes={filteredPokes}/>
    </Container>
  );
}

export default PokemonPage;
