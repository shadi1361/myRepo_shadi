//hook to fetch genres from the API: 

import useData from "./UseData";

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



const useGames = () => useData<Game>("/games");
// useData is a custom hook that fetches data from the API and returns the data, error, and loading state.
export default useGames;