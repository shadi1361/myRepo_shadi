//GenreList und GameGrid sind zwei Komponenten, die die Hooks useGenres und useGames verwenden
// um die Genres und Spiele von der API abzurufen und anzuzeigen.

import useGenres from "../hooks/useGenres";

export default function GenreList() {
  const { data } = useGenres();

  return (
    <ul>
      {data.map((genre) => (
        <li key={genre.id}> {genre.name}</li>
      ))}
    </ul>
  );
}
