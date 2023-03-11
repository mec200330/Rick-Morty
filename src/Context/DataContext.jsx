import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const apiURL = "https://rickandmortyapi.com/api/character";
  const [characters, setCharacters] = useState([]);
  const [fetching, setFetching] = useState(true);

  useEffect (()=>{

    axios
    .get(apiURL)
    .then((response)=>{
        setCharacters(response.data.results)
        console.log(response);
        setFetching(false)
    })
    .catch(err=> console.error(err))
  }, [])

  return (
<DataContext.Provider value={{characters, setCharacters, fetching, setFetching}}>

    {children}
</DataContext.Provider>

  )
};

export default DataProvider;
