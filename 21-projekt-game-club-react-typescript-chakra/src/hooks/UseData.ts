// Hier in UseData.ts können die beiden Hooks :"useGenres und useGames" zusammengefasst werden, und die Änderungen können in den beiden Komponenten :"GenreList und GameGrid" angewendet werden.

//hook : hooked to the api to get the genres

import { useEffect, useState } from "react";
import apiClient from "../services/api-client";


interface FetchResponse<T>{
  count: number;
  results: T[];
}

const useGenres =<T>(endpoint:string)=>{

const [data, setGames] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    apiClient
      .get<FetchResponse<T>>(endpoint)
      .then((res) => {
        setGames(res.data.results)
        setIsLoading(false)
      })
      .catch(err => {
          setError(err.message)
          setIsLoading(false) 
      })
  }, [endpoint]);

  return { data, error, isLoading };

}

export default useGenres; 