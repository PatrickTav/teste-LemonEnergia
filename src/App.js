import { ButtonComponent } from './Components/Button/Button'
import { useState } from 'react'
import '../src/style.css'


const App = () => {
	// Usando states (opcional) que fiz para poder trocar dinâmicamente o estado
	const [properties, setProperties] = useState('primary')

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

	return (
		<div className='container'>
			<div className='content'>
				<button onClick={handleChangeTheme}>Change Color </button><br />
				<button onClick={handleChangeDisable}>Disable </button><br />

				<ButtonComponent
					theme={properties}
					text='Text' /> <br />

				<button >none </button><br />
				<button >arrow-right </button><br />
				<button >check</button><br />
				<button >refresh </button><br />
			</div>
		</div>
	)
}

export default App