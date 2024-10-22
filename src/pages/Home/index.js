import { Header } from "../../components/Header";
import background from '../../assests/background.png';
import { ItemList } from "../../components/ItemList";
import { useState } from "react";
import './styles.js';
import { Conteudo, Background,Info, Input, Button, Profile, PerfilContainer, PerfilTitle, PerfilText, PerfilSpan, Repositories, DescriptionProfile, mediaQueries
} from './styles.js';

function App() {
  const [user, setUser] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setRepos] = useState([]);

  const handleGetData = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`);
    const newUser = await userData.json();

    if (newUser.name) {
      const { avatar_url, name, bio, login, url } = newUser;
      setCurrentUser({ avatar_url, name, bio, login, url });

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

      <Conteudo>
        <Background src={background} alt='Imagem do GitHub' />

        <Info>
          <div>
            <Input
              name="usuario"
              value={user}
              onChange={event => setUser(event.target.value)}
              placeholder="@username"
            />
            <Button onClick={handleGetData}>Buscar</Button>
          </div>

          {currentUser ? (
            <>
              <PerfilContainer>
                <Profile
                  src={currentUser.avatar_url}
                  alt="imagem de perfil"
                />
                <DescriptionProfile>
                  <PerfilTitle>{currentUser.name}</PerfilTitle>
                  <PerfilText>{currentUser.bio}</PerfilText>
                  <PerfilSpan>{`Id: ${currentUser.login}`}</PerfilSpan>
                </DescriptionProfile>
              </PerfilContainer>
              <hr />
              <div>
                <Repositories>Repositórios</Repositories>
                {repos.map(repo => (
                  <ItemList
                    key={repo.id}
                    title={repo.name}
                    description={repo.description}
                    url={repo.html_url}
                  />
                ))}
              </div>
            </>
          ) : null}
        </Info>
      </Conteudo>
    </>
  );
}

export default App;
