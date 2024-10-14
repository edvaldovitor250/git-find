import { Header } from "../../components/Header";
import background from '../../assests/background.png'
import './styles.css'

function App() {
  return (
  <>
    <Header/>
    
    <div className="conteudo">
      <img src={background} className="background" alt='Imagem do GitHub'/>

    <div className="info">
      <div>
        <input name="usuario" placeholder="@username"/>
        <button>Buscar</button>
      </div>
    </div>

    </div>
  </>
  );
}

export default App;
