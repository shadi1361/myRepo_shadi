//hook to fetch genres from the API: 

import useData from "./UseData";
import { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic:number;
}


//Mit selectedGenre greife ich auf die ID eines bestimmten Genres zu, erstelle die Informationen erneut als Query-Parameter in einem Endpunkt und rufe die Daten mit useData ab, um sie anschließend im Grid darzustellen
// useData is a custom hook that fetches data from the API and returns the data, error, and loading state.
const useGames = (selectedGenre: Genre|null) => useData<Game>("/games" , {params: {genres:selectedGenre?.id}},[selectedGenre?.id] ); 
export default useGames;