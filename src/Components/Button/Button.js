import { Button } from "./style"
export const ButtonComponent = (props) => {
    return (
        <>
            {/* No primeiro button o theme esta sendo passado "primary", 
        entretanto, o primary é a cor padrão. Se tirar, vai continuar verde 
        */}
            <Button
                theme={props.theme}
            >{props.text}</Button>
        </>
    )
}