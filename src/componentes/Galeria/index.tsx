import styled from "styled-components"
import Titulo from "../Titulos"
import Tags from "./Tags"
import Populares from "./Populares"
import Imagem from "./Imagem"

const GaleriaContainer= styled.div`
    display: flex;

`

const SecaoFluida = styled.section`
    flex-grow: 1;
    ul{
        display: flex;
        flex-wrap: wrap;
    }
`
interface fotosGaleria {
    titulo: string;
    fonte: string;
    path: string;
    id: string;
    tagId: number;
}
//textas colocar a interface propsGaleria dentro do ZoomProps



const Galeria = ({ fotos,aoFotoSelecionada}:{ fotos: fotosGaleria[],aoFotoSelecionada?:(foto: fotosGaleria) => void; }) => {
    return (
        <>
            <Tags />
            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo>Navegue pela galeria</Titulo>
                    
                    <ul>
                        {
                            fotos.map(foto => <Imagem 
                                aoZoomSolicitado={aoFotoSelecionada}
                                key={foto.id} foto={foto}/>)
                        }
                    </ul>

                </SecaoFluida>
                
                <Populares />

            </GaleriaContainer>
        </>
    )
}

export default Galeria