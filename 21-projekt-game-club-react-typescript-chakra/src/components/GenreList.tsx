//GenreList und GameGrid sind zwei Komponenten, die die Hooks useGenres und useGames verwenden
// um die Genres und Spiele von der API abzurufen und anzuzeigen.
import { Button, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";


interface Props{
  onSelectedGenre : (genre: Genre)=>void
}



export default function GenreList({onSelectedGenre}: Props) {
  const { data, isLoading, error} = useGenres();
  if(error) return null;
  if(isLoading) return <Spinner/>

  return (
    <List>
      {data.map(genre => (
        <ListItem key={genre.id} paddingY={2}>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
              alt={genre.name}
            />
            <Button onClick={()=> onSelectedGenre(genre)} fontSize='lg' variant='link'>{genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}
