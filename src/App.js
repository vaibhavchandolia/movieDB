import React, {useState, useEffect} from "react";
import PokemonList from "./PokemonList";
import axios from 'axios'
import Pagination from "./Pagination";


function App() {
  const [pokemon, setPokemon] = useState([""])
  const [currentPageUrl, setCurrentPageUrl] = useState(" https://pokeapi.co/api/v2/pokemon")
  const [nextPage, setNextPage] = useState()
  const [prevPage, setPrevPage] = useState()
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    setLoading(true)
    let cancel
    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setLoading(false)
      setNextPage(res.data.next)
      setPrevPage(res.data.previous)
      setPokemon(res.data.results.map(p => p.name))
    })

    return () => cancel()
  }, [currentPageUrl])

  if(loading) return "loading..."

  function goNextPage(){
    setCurrentPageUrl(nextPage)
  }

  function goPrevPage(){
    setCurrentPageUrl(prevPage)
  }


  return (
    <>
      <PokemonList pokemon ={pokemon}/>
      <Pagination
        goNextPage={nextPage ? goNextPage : null}
        goPrevPage={prevPage ? goPrevPage : null}
      />
    </>
  );
}

export default App;
