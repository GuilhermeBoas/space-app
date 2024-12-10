import styled from "styled-components";
import Imagem from "../Galeria/Imagem";


interface fotosGaleria {
    titulo: string;
    fonte: string;
    path: string;
    id: string;
    tagId: number;
}

const OverLayer = styled.div`
    background-color: rgba(0, 0, 0, 0.7 );
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

`
const Dialog = styled.dialog`
    top: 294px;
    background-color: transparent;
    border: none;
    width: 100%;
    max-width: 1156px
    ;
    form{
        button{
           position :absolute ;
           top: 5%;right:6%;

           background-color: transparent;
           border :none ;
           cursor: pointer;
           
          
        }
    }
`


const ModalZoom = ({ foto, aoFechar }: { foto: fotosGaleria | null, aoFechar:(value: React.SetStateAction<fotosGaleria | null>) => void }) => {
    return (
        <>
            {foto && <>
                <OverLayer/>
                <Dialog open={!!foto}>
                    <Imagem foto={foto} expandida={true} />
                    <form method="dialog">
                        <button onClick={()=>aoFechar(null)}>
                            <img src="/icones/fechar.png" alt="" />
                        </button>
                    </form>
                </Dialog>


            </>}
        </>
    )
}

export default ModalZoom