import styled from 'styled-components'

export const Container = styled.header`
    display: grid;
    grid-template-columns: 1fr 90% 1fr;
    background: white;
    height: 5rem;
    padding: 0.4rem ;
    align-items: center;
    border-bottom: 1px solid orange;
    box-sizing: border-box;



   
`

export const ImgContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    img{
        height: 3rem;
        width: 3rem;
    }
`
export const TextContent = styled.div`
    color: #392f5a;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.8rem;
`
