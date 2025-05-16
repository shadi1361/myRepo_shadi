// Hier in UseData.ts können die beiden Hooks :"useGenres und useGames" zusammengefasst werden, und die Änderungen können in den beiden Komponenten :"GenreList und GameGrid" angewendet werden.

//hook : hooked to the api to get the genres

import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig } from "axios";


interface FetchResponse<T>{
  count: number;
  results: T[];
}

const useGenres =<T>(endpoint:string, requestConfig?: AxiosRequestConfig, deps?:any[])=>{

const [data, setGames] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

useEffect(() => {
    setIsLoading(true);
    apiClient
      .get<FetchResponse<T>>(endpoint, {...requestConfig})
      .then((res) => {
        setGames(res.data.results)
        setIsLoading(false)
      })
      .catch(err => {
          setError(err.message)
          setIsLoading(false) 
      })
}, deps ? [...deps] : []);   //Innerhalb der eckigen Klammern muss etwas eingefügt werden, damit der Inhalt des useEffect jedes Mal erneut ausgeführt wird, wenn sich die Variable ändert, und erneut eine Anfrage an den Endpunkt gesendet wird, um die neuen Daten für den Benutzer zurückzugeben.

  return { data, error, isLoading };

}

export default useGenres; 