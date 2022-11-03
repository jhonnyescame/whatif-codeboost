import Image from "next/future/image";

import { PopupVideoStyle } from "./style";

import IconPlay from "../../assets/play.svg";

export function PopupVideo( { label, thumb, url }){
  return(
    <PopupVideoStyle>
      <span>{label}</span>
      <a href={url}>
        <button style={{background:`url(${thumb}) no-repeat center center` }}>
          <div>
            <Image src={IconPlay} alt="" />
          </div>
        </button>
      </a>
    </PopupVideoStyle>
  ) 
}