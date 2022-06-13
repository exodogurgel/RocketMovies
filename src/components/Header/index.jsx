import { Container, Profile, Logout } from './styles'
import { Input } from '../../components/Input'

export function Header() {
  return (
    <Container>
    <h2>RocketMovies</h2>
    <Input
      type="text"
      placeholder="Pesquisar pelo título"
    />
    <Profile>
      <div>
        <strong>Êxodo Gurgel</strong>
        <Logout>
          sair
        </Logout>
      </div>
      <img src="https://github.com/exodogurgel.png" alt="Foto do Usuário" />
    </Profile>

    </Container>
  )
} 