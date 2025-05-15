import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
}

interface FetchGenresResponse {
  count: number;
  results: Genre[];
}

const useGenres =()=>{

const [genres, setGames] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    apiClient
      .get<FetchGenresResponse>("/genres")
      .then((res) => {
        setGames(res.data.results)
        setIsLoading(false)
      })
      .catch(err => {
          setError(err.message)
          setIsLoading(false) 
      })
  }, [])

  return { genres, error, isLoading };

}

export default useGenres; 