import { useRouter } from "next/router"

import { SectionHeroCharacter } from "../../components/details/sectionHeroCharacter"

import {ListCharacters } from '../../components/home/listCharacters'
import { Container } from "../../styles/global";
import { PageTitle } from "../../components/PageTitle";

import { getPrismicClient } from "../../service/prismic";

export default function PageCharacter({character, characters}) {

  // const route = useRouter();
  // console.log(character);

  const router = useRouter ();

  if(router.isFallback){
    return <p>Carregando...</p>
  }

  return (
    <> 
     <PageTitle 
        title="What if - detalhes do personagem"
        description="Um projeto desenvolvido no curso codeboost"
      />
      { character && <SectionHeroCharacter data={character}/> }
      
      { characters && <ListCharacters data={characters} /> }
          
    </>
  );
}

export const getStaticPaths = async () => {
  const prismic = getPrismicClient();

  const characters = await prismic.getAllByType("character");

  const paths = characters.map(({data}) =>{
    return {
      params: {slug: data.slug},
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context)  => {
  const prismic = getPrismicClient();

  const characters = await prismic.getAllByType("character");

  const character = characters.find(({data}) => {
    return data.slug == context.params.slug
  });

  // console.log(character); // console no terminal

  characters.splice(
    characters.findIndex((e) => {
      return e.data.slug == character.data.slug
    }),
    1
  );


  return {
    props: { 
      character: character.data,
      characters,
     },
      revalidate: 60 * 2 // A cada 2 minutos
  };
};