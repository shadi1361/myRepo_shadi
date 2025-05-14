import {Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

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
      <GridItem area='aside' bg='gold'>aside</GridItem>
    </Show>    
    <GridItem area='main' bg='aqua'>main</GridItem>        
  </Grid>
}
