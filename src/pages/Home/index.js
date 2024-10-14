import { Header } from "../../components/Header";
import background from '../../assests/background.png';
import { ItemList } from "../../components/ItemList";
import { useState } from "react";
import './styles.css';

function App() {
  const [user, setUser] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setRepos] = useState([]);

  const handleGetData = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`);
    const newUser = await userData.json();

    if (newUser.name) {
      const { avatar_url, name, bio, login } = newUser;
      setCurrentUser({ avatar_url, name, bio, login });

      const reposData = await fetch(
        `https://api.github.com/users/${user}/repos`
      );
      const newRepos = await reposData.json();

      if (newRepos.length) {
        setRepos(newRepos);
      }
    }
  };

  return (
    <>
      <Header />

      <div className="conteudo">
        <img src={background} className="background" alt='Imagem do GitHub' />

        <div className="info">
          <div>
            <input
              name="usuario"
              value={user}
              onChange={event => setUser(event.target.value)}
              placeholder="@username"
            />
            <button onClick={handleGetData}>Buscar</button>
          </div>

          {currentUser ? (
            <>
              <div className="perfil">
                <img
                  src={currentUser.avatar_url}
                  className="profile"
                  alt="imagem de perfil"
                />
                <div>
                  <h3>{currentUser.name}</h3>
                  <p>{currentUser.bio}</p>
                  <span>{currentUser.login}</span>
                </div>
              </div>
              <hr />
              <div>
                <h4 className="repositories">Repositórios</h4>
                {repos.map(repo => (
                  <ItemList
                    key={repo.id}
                    title={repo.name}
                    description={repo.description}
                  />
                ))}
              </div>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default App;
