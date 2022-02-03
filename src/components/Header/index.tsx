import { Container, TextContent, ImgContent } from "./styles";
import logoImg from '../../assets/android-chrome-512x512.png'

export function Header(){
    return(
        <Container>
            <ImgContent>
                <img src={logoImg} alt="" />
            </ImgContent>
            <TextContent>
                Busca de Endereço pela API Viacep
            </TextContent>
            <div></div>
            
        </Container>
    )
}