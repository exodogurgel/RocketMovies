import { Container, ButtonAdd } from './styles'
import { FiPlus } from 'react-icons/fi'
import { Header } from '../../components/Header'
import { MovieCard } from '../../components/MovieCard'
import {} from '../../components/Header'

export function Home() {
  return (
    <Container>
      <Header />
      <section>
        <header>
          <h1>Meus filmes</h1>
          <ButtonAdd to="/new">
            <FiPlus />
            Adicionar filme
          </ButtonAdd>
        </header>

        <main>
          <MovieCard
            to="/details/22"
            data={{
              title: 'Interestellar',
              rating: 4,
              description:
                'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...',
              tags: [
                { id: '1', name: 'Ficção Cientifica' },
                { id: '2', name: 'Drama' },
                { id: '3', name: 'Familia' }
              ]
            }}
          />

          <MovieCard
            to="/details/23"
            data={{
              title: 'Interestellar',
              rating: 4,
              description:
                'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...',
              tags: [
                { id: '1', name: 'Ficção Cientifica' },
                { id: '2', name: 'Drama' },
                { id: '3', name: 'Familia' }
              ]
            }}
          />

          <MovieCard
            to="/details/22"
            data={{
              title: 'Interestellar',
              rating: 4,
              description:
                'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...',
              tags: [
                { id: '1', name: 'Ficção Cientifica' },
                { id: '2', name: 'Drama' },
                { id: '3', name: 'Familia' }
              ]
            }}
          />
        </main>
      </section>
    </Container>
  )
}
