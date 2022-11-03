import Image from "next/future/image";
import Link from "next/link";
import { Container } from "../../../styles/global";


import { SectionCharacterStyle } from "./styles";

import ImageCharacter from '../../../assets/character.jpg';

export function SectionHeroCharacter( { data }){

// console.log(data);

  return(
    <SectionCharacterStyle>
      <Container>
        <div className="image">
          <Image 
          src={data.image_character.url} 
          width={486} 
          // width={data.image_character.dimensions.width} 
          height={631} 
          // height={data.image_character.dimensions.height} 
          alt={data.name_character} />

        </div>
        <div className="infor">
          <span>A História</span>
          <div className="conteudo">
            <h1>
              {data.name_character}
            </h1>
            <p>
             {data.description_character[0].text}
            </p>
            
          </div>
        </div>
      </Container>
    </SectionCharacterStyle>
  ) 
}