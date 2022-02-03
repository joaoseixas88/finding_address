import { Container } from "./styles";

interface CepItemProps{
    codigoPostal: {
        cep: number;
        logradouro: string;
        complemento: string;
        bairro: string;
        localidade: string;
        uf: string;        
        ddd: number;   

    }
}

export function CepItem(props:CepItemProps){
    return(
                
        <Container> 
        <li>{"CEP: "+props.codigoPostal.cep}</li>
        <li>{"Logradouro: "+props.codigoPostal.logradouro}</li>
        <li>{"Complemento: "+props.codigoPostal.complemento}</li>
        <li>{"Bairro: "+props.codigoPostal.bairro}</li>
        <li>{"Localidade: "+props.codigoPostal.localidade}</li>
        <li>{"ESTADO: "+props.codigoPostal.uf}</li>
        <li>{"DDD: "+props.codigoPostal.ddd}</li>
        </Container>
    )
}

export function InvalidCep(){
    return(
        <Container>
            <li>Cep inválido</li>
        </Container>
    )
}