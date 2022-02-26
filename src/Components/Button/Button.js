import { Button } from "./style"
import { HiOutlineRefresh, HiOutlineCheck, HiOutlineArrowRight } from 'react-icons/hi'



export const ButtonComponent = (props) => {
    const svgIcons = {
        check: HiOutlineCheck,
        rafresh: HiOutlineRefresh,
        arrow: HiOutlineArrowRight
    }


    return (
        <>
            {/* No primeiro button o theme esta sendo passado "primary", 
        entretanto, o primary é a cor padrão. Se tirar, vai continuar verde 
        */}
            <Button
                theme={props.theme}>
                {props.text}
            </Button>
           
            {/*Aqui inseri um class para poder ter a aparência do botão
            com icone, Mas poderia fazer um state no App para que 
            apenas em um botão recebesse a class ou não */}
            <Button
                theme={props.theme}
                className='display'>
                {props.text}
                <svgIcons.arrow/>
            </Button>
        </>
    )
}
