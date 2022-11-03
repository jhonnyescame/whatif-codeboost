// import { StyleButton} from "./styles"
import Image from "next/future/image";
import Link from "next/link";


import { SectionHeroStyle,AreaSocial, ContexText } from "./styles";
import {Container} from "../../../styles/global";

import IconYoutube from "../../../assets/youtube.svg";
import IconInstagram from "../../../assets/instagram.svg";
import { PopupVideo } from "../../popVideo";
import { useEffect } from "react";

const socials = [
  {
    name: "Youtube",
    url:"#",
    icon:IconYoutube,
  },
  {
    name: "Instagram",
    url:"#",
    icon:IconInstagram,
  }
];

export function SectionHero({ data }){
  // useEffect(()=>{
    // console.log(data);
  // },[]);
  return(
    <SectionHeroStyle>
      <Container>
        <AreaSocial>
          <ul>
            { socials.map(({name, url, icon}) => {
              return(
                <li key={`social-${name}`}>
                  <Link href={url}>
                    <a>
                      <Image src={icon} alt={name} />
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </AreaSocial>

        <ContexText>
          <div className="left">
            <h3>{data.subtitle_hero}</h3>
            <h1>
              {data.title_hero}
            </h1>
            <p>
              {data.description_hero[0].text}
            </p>
            <Link href={data.url_button.url}>
              <a>
                {data.label_button}
              </a>
            </Link>
          </div>
          <PopupVideo url={data.url_label_trailer.url} label={data.label_trailer} thumb={data.thumbnail_trailer.url} />
        </ContexText>
      </Container>
    </SectionHeroStyle>
  )
}