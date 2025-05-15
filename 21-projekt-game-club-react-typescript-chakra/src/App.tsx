import {Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

export default function App() {
  return <Grid templateAreas={{
      base:`"nav" "main"`,
      lg:`"nav nav" "aside main"`
  }}>
    {/*Respansive grid areas*/}
    <GridItem area='nav'>
      <Navbar></Navbar>
    </GridItem>
    <Show above='lg'>
      <GridItem area='aside'>
        <GenreList/>
      </GridItem>
    </Show>    
    <GridItem area='main'>
      <GameGrid/>
    </GridItem>        
  </Grid>
}
