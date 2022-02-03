import styled from 'styled-components'



export const Container = styled.div`
    padding: 10rem;
    display: flex;
    flex-direction: column;
    color: white;
    margin-top: -8rem;
    align-items: center;
    justify-content: center;

    button{
        background: #392f5a;
        height: 3rem;
        width: 8rem;
        border: none;
        border-radius: 0.5rem;
        color: white;
        font-size: 1.2rem;
        font-weight: bold;
        transition: filter 0.2s;
        
        &:hover{
            filter: brightness(0.5);
      
        }
    }

    input{
        margin-top: 1rem;
        padding: 0.5rem;
        font-size: 1.2rem;
        width: 20rem;       
        text-align: center;
    }

    
    
`

