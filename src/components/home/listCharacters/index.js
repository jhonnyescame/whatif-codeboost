import Image from "next/future/image";

import { Container } from "../../../styles/global";

import { CardCharacter } from "../../cardCharacter";
import { ListCharactersStyle, SectionCharactersStyle} from "./styles";

import LogoMarvel from "../../../assets/logo.svg"
import ImageCaracter from "../../../assets/character.jpg";
import Thor from "../../../assets/thor.jpg";

// const characters = [
//   {
//     name:"Killmonger",
//     image:ImageCaracter,
//     slug:"/killmonger",
//   },
//   {
//     name:"Thor",
//     image:Thor,
//     slug:"/thor",
//   },
//   {
//     name:"Killmonger",
//     image:ImageCaracter,
//     slug:"/killmonger",
//   },
//   {
//     name:"Thor",
//     image:Thor,
//     slug:"/thor",
//   },
//   {
//     name:"Thor",
//     image:Thor,
//     slug:"/thor",
//   }
// ]

export function ListCharacters( { data }){
  return(
    <SectionCharactersStyle>
      <Container>
        <div className="title">
          <span>
            What if
          </span>
          <h2>
            Personagens Marvel
          </h2>
        </div>
        <ListCharactersStyle>
          {
            data.map(character => {
              return(
                <CardCharacter 
                  key={character.id} 
                  slug={character.data.slug} 
                  image={character.data.image_character.url} 
                  name={character.data.name_character} 
                />
              );
            })}
          
          <div className="marvel">
            <Image src={LogoMarvel} alt="Marvel Studios" />
          </div>
        </ListCharactersStyle>
      </Container>
    </SectionCharactersStyle>
    )
  }