import { ButtonComponent } from './Components/Button/Button'
import { useState } from 'react'
import '../src/style.css'


const App = () => {
	// Usando states (opcional) que fiz para poder trocar dinâmicamente o estado
	const [properties, setProperties] = useState('primary')
	const [ icon, setIcon] = useState('arrow')

	// Função para que ao clicar troque o Tema 
	const handleChangeTheme = () => {
		// Passando uma condição para que se um estado tiver atual, ele irá ser trocado
		if (properties === 'primary') {
			setProperties('secondary')
		} else {
			setProperties('primary')
		}
	}
	// Função que habilita o disable
	const handleChangeDisable = () => {
		setProperties('disable')
	}
	const handleIcons = ()=>{
		setIcon('check')
	}

	return (
		<div className='container'>
			<div className='content'>
				<button onClick={handleChangeTheme}>Change Color </button><br />
				<button onClick={handleChangeDisable}>Disable </button><br />

				<ButtonComponent
					theme={properties}
					
					text='Text' /> 
				
				<button onClick={handleIcons}>arrow </button><br />




			</div>
		</div>
	)
}

export default App