import { useState } from 'react'
import { CepItem, InvalidCep } from '../CepItem'
import { Container } from './styles'


interface CodigoPostal{
    erro?: boolean; 
    cep: number;
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;
    ibge: number;    
    ddd: number;     
    siafi: number;    
}

type codigo_postal = number 

export function Main(){

    
    const [codigoPostal, setCodigoPostal] = useState<CodigoPostal>({} as CodigoPostal)
    const [isCepValid, setIsCepValid] = useState<boolean>(true)
    
    function buscaCep(codigo_postal: codigo_postal) {
        
        if ((codigo_postal.toString()).length !== 8 ){
            return alert('Necessário 8 digitos')
            
        } else{
            fetch(`https://viacep.com.br/ws/${searchCep}/json/unicode/`)
            .then(response => response.json())
            .then(data => verificaResultado(data))             
        }
}

function verificaResultado(codigo_postal: CodigoPostal){
    if(codigo_postal.erro === true){
        return (setIsCepValid(false))
    }
    return(
        setCodigoPostal(codigo_postal), setIsCepValid(true))
    
}


    const [searchCep, setSearchCep] = useState<codigo_postal>(0)
    
    return(
        
        <Container>
            <button  onClick={() => buscaCep(searchCep)}>Nova Busca</button>
            <input
            type="number" 
            onChange={(e) => setSearchCep(Number(e.target.value))}
            placeholder="Busca" 
            />
             
            <ul>                         
                {!isCepValid ? <InvalidCep /> : <CepItem codigoPostal={codigoPostal} />}
            </ul>
        </Container>
    )
}


    
