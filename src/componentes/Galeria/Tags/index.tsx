import styled from 'styled-components'
import tags from './tags.json'

const TagsContainer = styled.div`
    display: flex;
    gap: 24px;
    align-items: center;
`
const TituloTag = styled.h3`
    font-size: 24px;
    font-weight: 400;
    color:#D9D9D9;

`

const ButtonTag = styled.button`
    max-height: 48px;
    background-color: #D9D9D94D;
    ;
    color: #fff;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-size: 24px;
    padding: 12px;
    border: 2px solid transparent;
    box-sizing: border-box;

    &:hover {
      border-color: #C98CF1;
    }
    
`

const Tags = ()=>{
    return(
        <TagsContainer>
            <TituloTag>Busque por tags:</TituloTag>
            {tags.map(tag => <ButtonTag key={tag.id}>{tag.titulo}</ButtonTag>)}
            {/* fazer uma props para a tag selecionada */}
        </TagsContainer>
    )

}
export default Tags