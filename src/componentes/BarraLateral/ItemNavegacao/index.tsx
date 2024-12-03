import { ReactNode } from "react";
import styled from "styled-components";

interface Item {
    children: ReactNode; //React node é a opção mais 'generica' vou deixar so para lembrar
    iconeAtivo:string;
    iconeInativo:string;
    ativo?: boolean
    
}

interface ItemListaProps {
    $ativo?: boolean;
}

const ItemListaEstilizado = styled.li<ItemListaProps>`
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 30px;
    cursor: pointer;
    color: ${props => props.$ativo ? '#7B78E5' : '#D9D9D9'};
    font-family: ${props => props.$ativo ? 'GandhiSansBold' : 'GandhiSansRegular'};
    display: flex;
    align-items: center;
    gap: 22px;
`

const ItemNavegação = ({children,iconeAtivo,iconeInativo,ativo=false}:Item) =>{
    return(
        <ItemListaEstilizado $ativo={ativo}>
            <img src={ativo? iconeAtivo : iconeInativo} alt={ativo? 'Icone Ativo': 'Icone Inativo'} />
            {children}
        </ItemListaEstilizado>
    )
}

export default ItemNavegação