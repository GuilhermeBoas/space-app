import styled from "styled-components"


const BannerEstilizado = styled.div`
    background-image: url('src/assets/banner.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    max-width: 100%;
    
    height: 328px;
    border-radius: 20px;
`
const TituloEstilizado = styled.h1`
    font-size: 40px;
    font-weight: 400;

    color: #fff;
    
    width: 300px;
    padding: 92px 0 92px 64px;
    margin: 0;
`

const Banner = () =>{
    return(
    
        <BannerEstilizado>
            <TituloEstilizado>
            A galeria mais completa de fotos do espaço!
            </TituloEstilizado>
        </BannerEstilizado>
    )
}

export default Banner