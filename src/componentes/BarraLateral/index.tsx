import styled from "styled-components"
import ItemNavegacao from "./ItemNavegacao"

const ListaEstilizada = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 212px;
    
    
`

const IconesLateral = [
    {
        texto:'Início',
        iconeA:'/icones/home-ativo.png',
        iconeI:'/icones/home-inativo.png'
    },{
        texto:'Mais vistas',
        iconeA:'/icones/mais-vistas-ativo.png',
        iconeI:'/icones/mais-vistas-inativo.png'
    },{
        texto:'Mais curtidas',
        iconeA:'/icones/mais-curtidas-ativo.png',
        iconeI:'/icones/mais-curtidas-inativo.png'
    },{
        texto:'Novas',
        iconeA:'/icones/novas-ativo.png',
        iconeI:'/icones/novas-inativo.png'
    },{
        texto:'Surpreenda-me',
        iconeA:'/icones/surpreenda-me-ativo.png',
        iconeI:'/icones/surpreenda-me-inativo.png'
    },

]

const BarraLateral = () => {
    return (
        <aside>
            <nav>
                <ListaEstilizada>
                    {IconesLateral.map((icone,index)=>
                        <ItemNavegacao key={index}
                            iconeAtivo={icone.iconeA}
                            iconeInativo={icone.iconeI}
                            ativo={icone.texto =='Início'?true:false}
                            //acredtiro que o correto seria validar pela url que encaminha
                        >
                        {icone.texto}
                        </ItemNavegacao>
                    )}
                </ListaEstilizada>
                
            </nav>
        </aside>
    )
}

export default BarraLateral