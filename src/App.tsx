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
  favorita?:boolean
}

function App() {
  const [fotosGaleria, setFotosGaleria] = useState(fotos)
  const [fotoSelecionada, setFotoSelecionada] = useState<fotosGaleria | null>(null)
  
  const aoAlternarFavorito = (foto:any) => {
      if(foto.id === fotoSelecionada?.id) {
        setFotoSelecionada(fotoSelecionada &&({
          ...fotoSelecionada,
          favorita: !fotoSelecionada.favorita,
          titulo: fotoSelecionada?.titulo || "",
          fonte: fotoSelecionada?.fonte || "",   
          path: fotoSelecionada?.path || "",    
          id: fotoSelecionada?.id || "",       
          tagId: fotoSelecionada?.tagId || 0    
        }))
      }
    
    setFotosGaleria(fotosGaleria.map((fotoDaGaleria:fotosGaleria) => {
        return{
          ...fotoDaGaleria,
          favorita: fotoDaGaleria.id === foto.id ? !fotoDaGaleria.favorita : fotoDaGaleria.favorita
        }
    }))
  }
  
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
            <Galeria
              aoFotoSelecionada={(foto) => setFotoSelecionada(foto)}
              fotos={fotosGaleria} 
              aoAlternarFavorito={aoAlternarFavorito}/>
          </ConteudoGaleria>
        </MainContainer>

      </AppContainer>
      <ModalZoom
        aoAlternarFavorito={aoAlternarFavorito} 
        aoFechar={nada => setFotoSelecionada(nada)}
        foto={fotoSelecionada} 
      />

      {/* error no Modal !expandida */}
    </FundoGradiente>
  )
}

export default App
