
import styled from "styled-components";
// Criação de objeto para os temas
const theme = {
    primary: {
        default: '#026C00',
        hover: '#079504',
        active: '#013C00',
    },
    secondary: {
        default: '#F7C346',
        hover: '#FFDF77',
        active: '#DCAC0D',
    },
    disable: {
        cursor: 'default',
        default: '#B7D0B6'
    }
}

// As props estão sendo passadas por um Objeto com propriedades tornando mais dinâmico
export const Button = styled.div`
    box-sizing: border-box;
    background-color:${props => theme[props.theme].default};
    min-width: 311px;
    width: 311px;
    height: 56px;
    max-width: 100%;
    color: #FFF;
    font-weight: 400;
    border: none;
    margin: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    
    span{
        
        float: right;
        margin-right:18px ;
    }

        &:hover{
            background-color: ${props => theme[props.theme].hover};
            transition: ease background-color 250ms;
        }
        &:active{
            background-color: ${props => theme[props.theme].active};
        }
        &:disabled{
            cursor: ${props => theme[props.theme].cursor};
            background-color:${props => theme[props.theme].default} ;
        }
        

         
`
// Criando a cor padrão do componente 
Button.defaultProps = {
    theme: 'primary'
}