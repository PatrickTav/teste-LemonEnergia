
import styled from "styled-components";
// Criação de objeto para os temas
const theme = {
    primary: {
        default: '#026C00',
        hover: '#079504',
        active:'#013C00'
    },
    secondary:{
        default:'#F7C346',
        hover:'#FFDF77',
        active:'#DCAC0D'

    }
}


export const Button = styled.button`
    background-color:${props => theme[props.theme].default};
    min-width: 311px;
    height: 56px;
    max-width: 100%;
    color: #FFF;
    font-weight: 400;
    border: none;
    margin: 5px;
    cursor: pointer;
    
    &:hover{
        background-color: ${props => theme[props.theme].hover};
        transition: ease background-color 250ms;
    }
    &:active{
        background-color: ${props=>theme[props.theme].active};
    }
`

// Criando a cor padrão do componente 
Button.defaultProps = {
    theme: 'primary'
}