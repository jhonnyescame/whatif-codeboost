// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'


import { SectionHero } from "../components/home/sectionHero";

import { ListCharacters } from "../components/home/listCharacters";
import { PageTitle } from "../components/PageTitle";
import { useEffect } from "react";
import { getPrismicClient } from "../service/prismic";

export default function Home({dataPage, characters}) {
  // console.log(characters);
  return (
    <>
      <PageTitle 
        title="What if - CodeBoost"
        description="Um projeto desenvolvido no curso codeboost"
      />
      <SectionHero data={dataPage} />
      <ListCharacters data={characters}/>
    </>
  )
}

export const getStaticProps = async () => {
  const prismic = getPrismicClient();

  const contentPages = await prismic.getSingle("home");

  const characters = await prismic.getAllByType("character");

  // console.log(characters);

  return {
    props: {
      dataPage:contentPages.data,
      characters,
    },
    revalidate: 60 * 2 // A cada 2 minutos
  }
}