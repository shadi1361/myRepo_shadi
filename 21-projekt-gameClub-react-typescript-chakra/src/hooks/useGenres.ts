//hook : hooked to the api to get the genres

import genres from "../data/genres"

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => ({data:genres, isLoading:false, error:null})

export default useGenres;
