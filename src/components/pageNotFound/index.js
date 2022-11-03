import Image from "next/future/image";
import Link from "next/link";

import { Container } from "../../styles/global";
import { PageNotFoundStyle } from "./styles";

import ImageNotFound from "../../assets/image-not-found.png"

export default function ComponentPageNotFound() {
  return (
    <PageNotFoundStyle>
      <Container>
        <h1>Whoops, essa página sumiu.</h1>
        <p>
          OHHH, parece que não conseguimos encontrar a página que você está procurando. Tente voltar à página anterior ou consulte nossa Central de Ajuda para obter mais informações.
          </p>
          <Link href="/">
            <a>Voltar</a>
          </Link>
        <Image src={ImageNotFound} alt="PageNotFoundStyle" />
      </Container>
    </PageNotFoundStyle>
  )
}