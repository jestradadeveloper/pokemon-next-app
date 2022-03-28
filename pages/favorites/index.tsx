import { useEffect, useState } from 'react';
import { Layout } from "../../components/layouts"
import { NoFavorites } from "../../components/ui";
import { FavoritesPokemons } from '../../components/ui/FavoritesPokemons';
import { localFavorites } from "../../utils";

const FavoritePage = () =>{
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);
  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons())
  }, []);
  return(
   <Layout title='Favorites Page'>
     {
      favoritePokemons.length === 0
      ?(<NoFavorites />)
      :(<FavoritesPokemons favoritePokemons={favoritePokemons} />)
     }
   </Layout>
  )
}


export default FavoritePage;
