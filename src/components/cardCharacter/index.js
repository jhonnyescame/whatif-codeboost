import Image from "next/future/image";
import Link from "next/link";

import { CardCharacterStyle } from "./styles";



export function CardCharacter({ image, name, slug }){
  return(
    <CardCharacterStyle>
      <Link  href={`/character/${slug}`}>
        <a>
          <div className="image">
            <Image src={image} width={280} height={372}  alt="Character" />
          </div>
          <div className="inf">
            <div>
              <h3>{name}</h3>
              <span> Marvel </span>
            </div>
            <span>
              Waht if
            </span>
          </div>
        </a>
      </Link>
    </CardCharacterStyle>
  ) 
}