import styled from "styled-components"
import Titulo from "../../Titulos"
import Fotos from './fotos-populares.json'

const ContainerPopulares = styled.div`
    display: flex;
    flex-direction: column;
    
    div{
        display: flex;
        flex-direction: column;
        gap: 24px;
        img{
            border-radius: 10px;
            display: block;
        }
    }
`
const Botao = styled.button`
    background-color: transparent;
    color: #fff;
    border: 2px solid;
    border-color: #C98CF1;
    padding: 12px 20px;
    font-size: 20px;
    border-radius: 10px;
    cursor: pointer;
    width: 100%;
    margin-top: 16px;
`

const Populares = () =>{
    return(
        <ContainerPopulares>
            <Titulo $alinhamento="center">Populares</Titulo>
            
            <div>
                {Fotos.map(foto => <img src={foto.path} alt="" /> )}
            </div>

            <Botao>
                Ver Mais
            </Botao>
        </ContainerPopulares>
    )
}

export default Populares