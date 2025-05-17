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
  metacritic: number;
}

// استفاده از useData برای گرفتن بازی‌ها با فیلتر ژانر انتخاب‌شده
const useGames = (selectedGenre: Genre | null) => {
  return useData<Game>(
    "/games",
    { params: { genres: selectedGenre?.id } }
  );
};

export default useGames;
