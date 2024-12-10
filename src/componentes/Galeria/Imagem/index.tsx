import styled from "styled-components";


interface fotosGaleria {
    titulo: string;
    fonte: string;
    path: string;
    id: string;
    tagId: number;
}
interface Expandida{
    $expandida?:boolean
}

const ContainerFigure = styled.figure<Expandida>`
    background-color: #001634;
    flex-grow: 1;
    border-radius: 10px;
    width: ${props => props.$expandida ? '' : ''};
    /* '90%' : '460px'    deixei vazio pq deixava a imagem muito grande, posteriormente eu tento encaixar essa parte no codigo*/
`

const ImgCard = styled.img`
    width: 100%;
    border-radius: 10px 10px 0 0 ;
`

const BotaoFig = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;

`

const FigureTexto = styled.figcaption`
    color: #ffff;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 0;
    h3{
        margin: 0;
    }
`

const RodapeFig = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    p{
        margin: 0;
    }
    
`


const Imagem = ({ foto, expandida = false, aoZoomSolicitado }: { foto: fotosGaleria, expandida?:boolean,aoZoomSolicitado?:(foto: fotosGaleria) => void; }) => {
    return (
        <ContainerFigure $expandida={expandida} id={`foto-${foto.id}`}>
            <ImgCard src={foto.path} alt={foto.titulo} />
            <FigureTexto>

                <h3>{foto.titulo}</h3>

                <RodapeFig>
                    <p>{foto.fonte}</p>

                    <div>
                        <BotaoFig>
                            <img src="/icones/favorito.png" alt="icone de "></img>
                        </BotaoFig>

                        {!expandida && <BotaoFig aria-hidden={expandida}
                         onClick={()=>aoZoomSolicitado(foto)}>
                            
                            <img src="/icones/expandir.png" alt="icone de "></img>
                        
                        </BotaoFig>}
                    </div>

                </RodapeFig>

            </FigureTexto>
        </ContainerFigure>

    )
}

export default Imagem