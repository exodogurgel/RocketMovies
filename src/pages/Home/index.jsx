import { Container, ButtonAdd } from './styles'
import { FiPlus } from 'react-icons/fi'
import { Header } from '../../components/Header'
import {} from '../../components/Header'

export function Home() {
  return (
    <Container>
      <Header />
      <section>
        <header>
          <h1>Meus filmes</h1>
          <ButtonAdd>
            <FiPlus />
            Adicionar filme
          </ButtonAdd>
        </header>

        <main></main>
      </section>
    </Container>
  )
}
