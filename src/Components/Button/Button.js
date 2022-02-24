import { Button } from "./style"
export const ButtonComponent = ()=>{    
    return(
        <>
        {/* No primeiro button o theme esta sendo passado "primary", 
        entretanto, o primary é a cor padrão. Se tirar, vai continuar verde 
        */}
            <Button 
            theme='primary'
            >Text</Button>
            <Button 
            theme='secondary'
            >Text</Button>
            <Button 
            disabled
            >Text</Button>
        </>
    )
}