// import { StyleButton} from "./styles"
import Image from "next/future/image"
import Link from "next/link"

import Logo from "../../assets/logo.svg";
import LogoCodeboost from "../../assets/logo-codeboost.svg";

import { HeaderStyle } from "./styles";
import {Container} from "../../styles/global"
export function Header(){
  return(
    <HeaderStyle>
      <Container>
        <div className="logo">
          <Link href="/">
            <a>
              <Image src={Logo} alt="Logo Marvel Studio" />
            </a>
          </Link>
        </div>
        <div className="code">
          <Link href="/">
            <a>
              <Image src={LogoCodeboost} alt="Logo Marvel Studio" />
            </a>
          </Link>
        </div>
      </Container>
    </HeaderStyle>
  )
}