import styled from "styled-components"
import EstilosGlobais from "./componentes/EstilosGlobais"
import Cabecalho from "./componentes/Cabecalho"
import BarraLateral from "./componentes/BarraLateral"
import Banner from "./componentes/Banner"


const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  height: 100vh;

`
//contruir  um main-container para o banner e para a galeria e terminar o banner


function App() {

  //ver final do video de fontes, cansei por agora 

  return (
    <FundoGradiente>
      <EstilosGlobais />
        <Cabecalho />
        <BarraLateral />
        <Banner />
      

    </FundoGradiente>
  )
}

export default App
