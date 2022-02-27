import { ButtonComponent } from "./Components/Button/Button";
import { useState } from "react";
import "../src/style.css";

const App = () => {
  const iconsProps = ["arrow", "check", "refresh"];
  // Usando states (opcional) que fiz para poder trocar dinâmicamente o estado
  const [properties, setProperties] = useState("primary");
  const [icon, setIcons] = useState("check");
  // Função para que ao clicar troque o Tema
  const handleChangeTheme = () => {
    // Passando uma condição para que se um estado tiver atual, ele irá ser trocado
    if (properties === "primary") {
      setProperties("secondary");
      return;
    }
    setProperties("primary");
  };
  // Função que habilita o disable
  const handleChangeDisable = () => setProperties("disable");

  const handleIcon = (icon) => setIcons(icon);

  return (
    <div className="container">
      <div className="content">
        <div className="cont-buttons">
          <button onClick={handleChangeTheme}>Change Color </button>

          <button onClick={handleChangeDisable}>Disable </button>
          
          <div>
            {iconsProps.map((icon) => (
              <button onClick={() => handleIcon(icon)} key={icon}>
                {icon}
              </button>
            ))}
          </div>
        </div>
  {/* Componente */}
        <ButtonComponent icons={icon} theme={properties} text="Text" />
      </div>
    </div>
  );
};
export default App;
