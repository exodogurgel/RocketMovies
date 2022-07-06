import { Container, Profile, Logout, Avatar } from './styles';
import { Input } from '../../components/Input';

import { useAuth } from '../../hooks/auth';

export function Header() {
  const { signOut } = useAuth();

  return (
    <Container>
      <h2>RocketMovies</h2>
      <Input type="text" placeholder="Pesquisar pelo título" />
      <Profile>
        <div>
          <strong>Êxodo Gurgel</strong>
          <Logout onClick={signOut}>sair</Logout>
        </div>
        <Avatar to="/profile">
          <img src="https://github.com/exodogurgel.png" alt="Foto do Usuário" />
        </Avatar>
      </Profile>
    </Container>
  )
}
