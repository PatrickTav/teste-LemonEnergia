import { ButtonComponent } from './Components/Button/Button'
import { useState } from 'react'


const App = () => {
	// Usando states (opcional) que fiz para poder tocar dinâmicamente o estado
	const [properties, setProperties] = useState('primary')

	// Função para que ao clicar troque o Tema 
	const handleChangeTheme = () => {
	// Passando uma condição para que se um estado tiver atual, ele irá ser trocado
		if(properties === 'primary'){
			setProperties('secondary')
		}else{
			setProperties('primary')
		}
		
	}

	// Função que habilita o disable
	const handleChangeDisable = () => {
		setProperties('disable')
	}

	return (
		<div>
			<button onClick={handleChangeTheme}>Trocar de cor </button><br />
			<button onClick={handleChangeDisable}>Desabilitar </button><br />
			<ButtonComponent
				theme={properties}
				text='text' />
		</div>
	)
}

export default App