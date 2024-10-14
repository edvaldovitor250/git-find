import { Header } from "../../components/Header";
import background from '../../assests/background.png'
import './styles.css'

function App() {
  return (
    <>
      <Header />

      <div className="conteudo">
        <img src={background} className="background" alt='Imagem do GitHub' />

        <div className="info">
          <div>
            <input name="usuario" placeholder="@username" />
            <button>Buscar</button>
          </div>
          <div className="perfil" >
            <img
              src="https://media.licdn.com/dms/image/v2/D4D35AQHyp10n1FNY4w/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1710607237792?e=1729533600&v=beta&t=gTeivW9Oi5vXqVuJV53Ow0Mk2fqaCLk2PCHsq8VK2X8"
              className="profile"
              alt="imagem de perfil"
            />
            <div>
              <h3>Edvaldo Vitor</h3>
              <p>Desenvolvedor Web</p>
              <span>Desenvolvedor Web</span>
            </div>
          </div>
          <hr/>
        </div>
      </div>
    </>
  );
}

export default App;
