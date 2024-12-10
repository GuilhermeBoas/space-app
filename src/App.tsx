import styled from "styled-components"
import EstilosGlobais from "./componentes/EstilosGlobais"
import Cabecalho from "./componentes/Cabecalho"
import BarraLateral from "./componentes/BarraLateral"
import Banner from "./componentes/Banner"
import Galeria from "./componentes/Galeria"

import fotos from './fotos.json'
import { useState } from "react"
import ModalZoom from "./componentes/ModalZoom"

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;

`
const AppContainer = styled.div`
  width: 1440px;
  max-width: 100%;
  margin: 0 auto;
  
`
const MainContainer = styled.main`
  display: flex;
  gap: 24px;
  
`

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`
interface fotosGaleria {
  titulo: string;
  fonte: string;
  path: string;
  id: string;
  tagId: number;
}

function App() {
  const [fotosGaleria, SetFotosGaleria] = useState(fotos)
  const [fotoSelecionada, SetFotoSelecionada] = useState<fotosGaleria | null>(null)
  //não esqueça de tipar os useStATE TBM 

    //Chega por hj quando abrir de novo tentar entender o que aconteceu e como foi passada a infomação de filho para pai 

  return (
    <FundoGradiente>
      <EstilosGlobais />

      <AppContainer>
        <Cabecalho />

        <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>
            <Banner />
            <Galeria aoFotoSelecionada={(foto) => SetFotoSelecionada(foto)}
              fotos={fotosGaleria} />
          </ConteudoGaleria>
        </MainContainer>

      </AppContainer>
      <ModalZoom aoFechar={nada => SetFotoSelecionada(nada)} foto={fotoSelecionada} />
      {/* error no Modal !expandida */}
    </FundoGradiente>
  )
}

export default App
